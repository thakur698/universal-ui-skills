#!/usr/bin/env bash
set -e
if [ $# -eq 0 ]; then
  echo "Available skills:"
  find skills -mindepth 2 -maxdepth 2 -name SKILL.md -printf '%h\n' | sort
  exit 0
fi
cat "skills/$1/SKILL.md"
