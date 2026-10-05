# Contributing

Add improvements that make AI-generated UI more intentional, usable and distinctive.

Prefer:
- reusable procedures
- framework-neutral principles
- concrete implementation patterns
- visual QA guidance
- accessibility improvements
- examples showing before/after reasoning

Avoid:
- vendor lock-in
- secret/API requirements
- proprietary assets
- trend-only design rules
- copy-paste visual presets

## Workflow

1. Add or edit skills in `skills/<name>/SKILL.md`. Each needs YAML frontmatter with `name` and `description`.
2. Mirror the change into `.agents/plugins/universal-ui/skills/<name>/`. CI fails if the two copies differ.
3. Update `skills-lock.json` and `CHANGELOG.md` for new or changed skills.
4. Run `python scripts/check_skills.py` and make sure it prints `All skills valid.`
5. Open a pull request describing the problem the change solves and, where possible, benchmark evidence.
