# Git Daily Usage Guide - Zieder MOS

Complete guide for daily Git operations including pull, push, commit, and best practices.

## Table of Contents

1. [Daily Workflow](#daily-workflow)
2. [Pulling Code](#pulling-code)
3. [Committing Changes](#committing-changes)
4. [Pushing Code](#pushing-code)
5. [Checking Status](#checking-status)
6. [Common Scenarios](#common-scenarios)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Daily Workflow

### Standard Daily Workflow

```bash
# 1. Start your day - Pull latest changes
git pull origin main

# 2. Check what you're working on
git status

# 3. Make your changes (edit files)

# 4. Stage your changes
git add -A                    # Stage all changes
# OR
git add <specific-file>       # Stage specific file

# 5. Commit your changes
git commit -m "feat: your commit message"

# 6. Push your changes
git push origin main

# 7. Verify everything is synced
git status
```

---

## Pulling Code

### Pull Latest Changes

**Basic Pull:**
```bash
git pull origin main
```

**Pull with Rebase (cleaner history):**
```bash
git pull --rebase origin main
```

**Check What Will Be Pulled (without pulling):**
```bash
git fetch origin
git log HEAD..origin/main --oneline
```

**Pull Specific Branch:**
```bash
git pull origin <branch-name>
```

### Before Pulling - Check Your Status

```bash
# Always check your status before pulling
git status

# If you have uncommitted changes, either:
# Option 1: Commit them first
git add -A
git commit -m "feat: your changes"
git pull origin main

# Option 2: Stash them temporarily
git stash
git pull origin main
git stash pop
```

---

## Committing Changes

### Commit Message Conventions

Follow the conventions in `git-usage.md`:

**Prefixes:**
- `fix:` - Bug fixes
- `feat:` - New features
- `perf:` - Performance improvements
- `docs:` - Documentation changes
- `style:` - Formatting changes
- `refactor:` - Code refactoring
- `test:` - Adding missing tests
- `chore:` - Chore tasks

**Format:**
- Use lowercase for commit messages
- Format: `prefix: brief description`
- Add details after the summary line if needed

**Examples:**
```bash
git commit -m "feat: add equipment configuration UI"
git commit -m "fix: resolve search autocomplete issue"
git commit -m "docs: update API documentation with new endpoints"
git commit -m "refactor: update device service to use equipment terminology"
```

### Staging Changes

**Stage All Changes:**
```bash
git add -A
```

**Stage Specific Files:**
```bash
git add path/to/file1.java path/to/file2.tsx
```

**Stage All Files in Directory:**
```bash
git add backend/src/main/java/com/zieder/mos/equipment/
```

**Stage Modified Files Only:**
```bash
git add -u
```

**Interactive Staging (Review Each Change):**
```bash
git add -p
```

### Committing

**Simple Commit:**
```bash
git commit -m "feat: your message"
```

**Commit with Detailed Message:**
```bash
git commit -m "feat: add equipment configuration UI

- create EquipmentConfiguration component
- add multi-level configuration support
- integrate with backend API
- add validation and error handling"
```

**Amend Last Commit (Fix Message or Add Files):**
```bash
git commit --amend -m "feat: corrected message"
```

**Skip Staging (Commit All Tracked Changes):**
```bash
git commit -am "feat: your message"
```

---

## Pushing Code

### Basic Push

**Push to Main Branch:**
```bash
git push origin main
```

**Push with Upstream Tracking (First Time):**
```bash
git push -u origin main
```

**Force Push (⚠️ Use with Caution):**
```bash
# Only use if you're sure - can overwrite remote changes
git push --force origin main

# Safer alternative - force with lease
git push --force-with-lease origin main
```

### Before Pushing - Always Check

```bash
# 1. Check your status
git status

# 2. Check what commits you're about to push
git log origin/main..HEAD --oneline

# 3. Verify no conflicts
git fetch origin
git status
```

### Push Specific Branch

```bash
git push origin <branch-name>
```

---

## Checking Status

### Status Commands

**Detailed Status:**
```bash
git status
```

**Short Status (One Line Per File):**
```bash
git status --short
# or
git status -s
```

**Check What's Changed:**
```bash
# See modified files
git diff

# See staged changes
git diff --cached

# See all changes (staged + unstaged)
git diff HEAD
```

**See What Will Be Pushed:**
```bash
git log origin/main..HEAD --oneline
```

**See What Will Be Pulled:**
```bash
git fetch origin
git log HEAD..origin/main --oneline
```

---

## Common Scenarios

### Scenario 1: Starting Work on Existing Code

```bash
# 1. Pull latest changes
git pull origin main

# 2. Verify you're up to date
git status

# 3. Start working
# (edit files)
```

### Scenario 2: You Have Uncommitted Changes and Need to Pull

```bash
# Option A: Commit first (recommended)
git add -A
git commit -m "feat: work in progress"
git pull origin main

# Option B: Stash temporarily
git stash
git pull origin main
git stash pop
```

### Scenario 3: You Made Changes and Want to Push

```bash
# 1. Check what changed
git status

# 2. Stage changes
git add -A

# 3. Review what you're committing
git diff --cached

# 4. Commit
git commit -m "feat: your changes"

# 5. Check what will be pushed
git log origin/main..HEAD --oneline

# 6. Push
git push origin main

# 7. Verify
git status
```

### Scenario 4: Someone Else Pushed Changes While You Were Working

```bash
# 1. Try to push (will fail if there are conflicts)
git push origin main

# 2. If it fails, pull first
git pull origin main

# 3. Resolve any conflicts if they occur
# (Git will mark conflicts in files)

# 4. After resolving conflicts
git add -A
git commit -m "fix: resolve merge conflicts"
git push origin main
```

### Scenario 5: You Committed But Want to Change the Message

```bash
# Change last commit message
git commit --amend -m "feat: corrected message"

# If already pushed, you'll need to force push (coordinate with team)
git push --force-with-lease origin main
```

### Scenario 6: You Forgot to Add a File to Last Commit

```bash
# Add the file
git add forgotten-file.java

# Amend the commit
git commit --amend --no-edit

# Push (may need force-with-lease if already pushed)
git push --force-with-lease origin main
```

### Scenario 7: You Want to Undo Last Commit (Keep Changes)

```bash
# Undo commit but keep changes staged
git reset --soft HEAD~1

# Undo commit and unstage changes
git reset HEAD~1
```

### Scenario 8: You Want to See Recent Commits

```bash
# Last 10 commits
git log --oneline -10

# Last 10 commits with details
git log -10

# Last 10 commits with graph
git log --oneline --graph -10

# Commits by author
git log --author="Your Name" --oneline
```

---

## Best Practices

### 1. **Always Pull Before Starting Work**
```bash
git pull origin main
```
- Ensures you have the latest code
- Reduces merge conflicts
- Keeps you in sync with the team

### 2. **Commit Frequently**
- Commit small, logical changes
- Don't wait until the end of the day
- Each commit should represent a complete, working change

### 3. **Write Clear Commit Messages**
- Use proper prefixes (feat:, fix:, docs:, etc.)
- Be descriptive but concise
- Explain WHAT and WHY, not HOW (code shows how)

### 4. **Check Status Before Push**
```bash
git status
git log origin/main..HEAD --oneline
```
- Verify what you're pushing
- Catch any mistakes before they go to remote

### 5. **Never Force Push to Main (Unless Coordinated)**
- Use `--force-with-lease` if you must
- Coordinate with team before force pushing
- Consider creating a branch instead

### 6. **Use Branches for Features**
```bash
# Create feature branch
git checkout -b feature/equipment-config

# Work on feature
# ... make changes ...

# Commit and push branch
git add -A
git commit -m "feat: add equipment configuration"
git push -u origin feature/equipment-config

# Merge to main (via PR/MR)
```

### 7. **Review Changes Before Committing**
```bash
# See what changed
git diff

# See what's staged
git diff --cached

# Review before committing
git status
```

### 8. **Keep Your Branch Clean**
```bash
# Before pushing, ensure:
# - All tests pass
# - Code compiles
# - No debug code left
# - No commented-out code
```

---

## Troubleshooting

### Problem: "Your branch is ahead of 'origin/main' by X commits"

**Solution:**
```bash
# Push your commits
git push origin main
```

### Problem: "Your branch is behind 'origin/main' by X commits"

**Solution:**
```bash
# Pull latest changes
git pull origin main
```

### Problem: "Updates were rejected because the remote contains work"

**Solution:**
```bash
# Pull first, then push
git pull origin main
# Resolve any conflicts
git push origin main
```

### Problem: Merge Conflicts

**Solution:**
```bash
# 1. Pull will show conflicts
git pull origin main

# 2. Git marks conflicts in files like this:
# <<<<<<< HEAD
# your code
# =======
# their code
# >>>>>>> branch-name

# 3. Edit files to resolve conflicts
# Remove conflict markers and keep correct code

# 4. Stage resolved files
git add -A

# 5. Complete the merge
git commit -m "fix: resolve merge conflicts"

# 6. Push
git push origin main
```

### Problem: Accidentally Committed Wrong Files

**Solution:**
```bash
# Unstage but keep changes
git reset HEAD <file>

# Or unstage everything
git reset HEAD

# Then recommit with correct files
git add <correct-files>
git commit -m "feat: correct commit"
```

### Problem: Want to Undo Last Commit

**Solution:**
```bash
# Undo commit, keep changes
git reset HEAD~1

# Undo commit, discard changes (⚠️ destructive)
git reset --hard HEAD~1
```

### Problem: Can't Push Because Remote Has New Commits

**Solution:**
```bash
# Always pull first
git pull origin main

# If conflicts, resolve them
# Then push
git push origin main
```

---

## Quick Reference Cheat Sheet

### Daily Commands

```bash
# Start of day
git pull origin main

# Check status
git status

# Stage changes
git add -A

# Commit
git commit -m "feat: your message"

# Push
git push origin main

# Verify
git status
```

### Useful Aliases (Add to ~/.gitconfig)

```bash
# Short status
git config --global alias.st status

# Last 10 commits
git config --global alias.lg "log --oneline -10"

# Quick commit and push
git config --global alias.cp "!git commit -m \"$1\" && git push origin main"
```

### Common Command Combinations

```bash
# Pull and show what changed
git pull origin main && git log HEAD@{1}..HEAD --oneline

# Status and show unpushed commits
git status && git log origin/main..HEAD --oneline

# See all changes (staged + unstaged)
git diff HEAD

# See only your uncommitted changes
git diff
```

---

## Safety Checklist Before Push

✅ **Before every push, verify:**

1. ✅ All changes are committed
   ```bash
   git status  # Should show "nothing to commit"
   ```

2. ✅ You're up to date with remote
   ```bash
   git fetch origin
   git status  # Should not show "behind"
   ```

3. ✅ You know what you're pushing
   ```bash
   git log origin/main..HEAD --oneline
   ```

4. ✅ Code compiles and tests pass
   ```bash
   # Run your build/test commands
   ```

5. ✅ No sensitive data in commits
   ```bash
   # Check for passwords, keys, etc.
   ```

---

## Tips for Team Collaboration

1. **Communicate Before Force Push**
   - Always coordinate with team
   - Use `--force-with-lease` instead of `--force`

2. **Pull Before Push**
   - Reduces conflicts
   - Keeps history clean

3. **Use Descriptive Branch Names**
   ```bash
   feature/equipment-config
   fix/search-autocomplete
   docs/api-documentation
   ```

4. **Review Your Own Changes**
   ```bash
   git diff HEAD~1  # See what changed in last commit
   ```

5. **Keep Commits Focused**
   - One feature per commit
   - One fix per commit
   - Easier to review and revert

---

## Emergency Commands

### Discard All Local Changes
```bash
# ⚠️ Destructive - loses all uncommitted work
git reset --hard HEAD
git clean -fd
```

### Revert to Remote State
```bash
# ⚠️ Destructive - loses all local commits
git fetch origin
git reset --hard origin/main
```

### Save Work Without Committing
```bash
# Stash changes
git stash

# List stashes
git stash list

# Apply stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

---

## Summary: Daily Workflow Template

```bash
# Morning Routine
git pull origin main
git status

# During Work
# ... make changes ...
git status                    # Check what changed
git add -A                    # Stage changes
git commit -m "feat: changes" # Commit

# End of Day / Before Push
git status                    # Verify clean
git log origin/main..HEAD     # See what will be pushed
git push origin main          # Push
git status                    # Confirm success
```

---

**Remember:** When in doubt, check `git status` first!

