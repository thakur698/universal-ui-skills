# Installation

## Skills CLI

Install the whole repository:

```bash
npx skills add https://github.com/YOUR_USERNAME/universal-ui-skills
```

Install a particular skill:

```bash
npx skills add https://github.com/YOUR_USERNAME/universal-ui-skills --skill "ui-master"
```

## Antigravity

Recommended approach:
1. add the repository to the project/agent skill search path
2. install or activate `ui-master`
3. allow it to invoke the focused skills during implementation
4. keep project-specific rules in the project itself

## Tool integrations

Do not make external vendor APIs mandatory for the core skill.

An agent should detect what is installed, use compatible tools, and ask before:
- paid services
- destructive setup
- credentials/secrets
- changing existing production infrastructure
