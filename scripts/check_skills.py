import json
from pathlib import Path
import re
import sys

failed = False

# 1. Check skill frontmatter
skill_names = set()
for path in sorted(Path("skills").glob("*/SKILL.md")):
    text = path.read_text(encoding="utf-8")
    fm = re.match(r"\A---\r?\n(.*?)\r?\n---[ \t]*(?:\r?\n|\Z)", text, re.S)
    if not fm:
        print("[FAIL]", path, "missing or malformed frontmatter")
        failed = True
        continue
    front = fm.group(1)
    desc = re.search(r"^description:\s*(.+)$", front, re.M)
    if desc and len(desc.group(1)) > 1024:
        print("[FAIL]", path, "description longer than 1024 chars")
        failed = True
    
    name_match = re.search(r"^name:\s*(.+)$", front, re.M)
    if not name_match:
        print("[FAIL]", path, "missing name:")
        failed = True
    else:
        name = name_match.group(1).strip()
        if name in skill_names:
            print("[FAIL]", path, f"duplicate skill name: {name}")
            failed = True
        skill_names.add(name)

    if not re.search(r"^description:\s*(.+)$", front, re.M):
        print("[FAIL]", path, "missing description:")
        failed = True

# 1c. Check skills-lock.json entries point at real files
lock = Path("skills-lock.json")
if lock.exists():
    for lname, entry in json.loads(lock.read_text(encoding="utf-8")).get("skills", {}).items():
        if entry.get("source", "").startswith("thakur698/") and not Path(entry["skillPath"]).exists():
            print("[FAIL] skills-lock.json entry has no file:", lname, entry["skillPath"])
            failed = True

# 1b. Check skills/ and the plugin copy are in sync
plugin_skills = Path(".agents/plugins/universal-ui/skills")
if plugin_skills.exists():
    def tree(root):
        return {p.relative_to(root).as_posix(): p.read_bytes()
                for p in root.rglob("*") if p.is_file()}
    a, b = tree(Path("skills")), tree(plugin_skills)
    for rel in sorted(set(a) | set(b)):
        if rel not in b:
            print("[FAIL] missing in plugin copy:", rel)
            failed = True
        elif rel not in a:
            print("[FAIL] missing in skills/:", rel)
            failed = True
        elif a[rel] != b[rel]:
            print("[FAIL] differs between copies:", rel)
            failed = True

# 2. Check JSON files
json_files = ["github-metadata.json", ".claude-plugin/plugin.json"]
for json_file in json_files:
    p = Path(json_file)
    if p.exists():
        try:
            json.loads(p.read_text(encoding="utf-8"))
        except Exception as e:
            print("[FAIL]", json_file, "invalid JSON:", e)
            failed = True

# 3. Check for placeholders, local paths, and basic secrets
placeholders = ["YOUR" + "_USERNAME", "YOUR" + "_GITHUB_USERNAME"]
local_paths = [r"z:\\", r"c:\\", r"c:/", "/Users/", "/home/"]
secrets = [r"sk-[a-zA-Z0-9]{32}", r"AKIA[0-9A-Z]{16}"] # Basic openai / aws keys

def check_file_content(path):
    global failed
    ignored_parts = {"node_modules", ".dart_tool", "build", "dist", ".idea", ".vscode", "ephemeral"}
    ignored_names = {"check_skills.py", "local.properties", ".flutter-plugins-dependencies", "flutter_export_environment.sh", "Generated.xcconfig"}
    if any(part in path.parts for part in ignored_parts) or path.name in ignored_names:
        return

    try:
        text = path.read_text(encoding="utf-8")
        for p in placeholders:
            if p in text:
                print(f"[FAIL] {path} contains placeholder: {p}")
                failed = True
        for lp in local_paths:
            if re.search(lp, text, re.IGNORECASE):
                print(f"[FAIL] {path} contains local path: {lp}")
                failed = True
        for s in secrets:
            if re.search(s, text):
                print(f"[FAIL] {path} contains potential secret: {s}")
                failed = True
                
        # Check broken local links
        links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', text)
        for name, link in links:
            if link.startswith(("http://", "https://", "mailto:", "#", "file://")):
                continue
            
            # Remove hash anchors for file existence check
            file_link = link.split('#')[0]
            if not file_link:
                continue
                
            target_path = (path.parent / file_link).resolve()
            if not target_path.exists():
                print(f"[FAIL] {path} contains broken local link: {link}")
                failed = True
                
    except UnicodeDecodeError:
        pass # Skip binaries if any

for path in Path(".").rglob("*"):
    if path.is_file() and ".git" not in path.parts:
        check_file_content(path)

if failed:
    sys.exit(1)

print("All skills valid.")
