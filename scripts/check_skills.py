from pathlib import Path
import re
import sys

failed = False
for path in Path("skills").glob("*/SKILL.md"):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        print("[FAIL]", path, "missing frontmatter")
        failed = True
        continue
    front = text.split("---\n", 2)[1]
    for key in ("name:", "description:"):
        if not re.search(rf"^{re.escape(key)}\s*.+$", front, re.M):
            print("[FAIL]", path, "missing", key)
            failed = True

if failed:
    raise SystemExit(1)

print("All skills valid.")
