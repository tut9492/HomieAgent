#!/bin/bash
# Auto-commit and push workspace memory to GitHub
cd /home/ubuntu/.openclaw/workspace

# Only commit if there are changes
if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -m "auto-backup: $(date -u '+%Y-%m-%d %H:%M UTC')"
    git push origin main
fi
