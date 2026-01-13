# Git Setup Instructions

This document contains the commands to prepare the project for the first git push.

## Prerequisites
- Git must be installed and available in your PATH
- You should have access to the GitHub repository: https://github.com/pra-yasa/osmocys-ros.git

## Setup Steps

### 1. Initialize Git Repository (if not already initialized)
```bash
git init
```

### 2. Add Remote Repository
```bash
git remote add origin https://github.com/pra-yasa/osmocys-ros.git
```

If the remote already exists, you can update it with:
```bash
git remote set-url origin https://github.com/pra-yasa/osmocys-ros.git
```

### 3. Check Current Status
```bash
git status
```

### 4. Stage All Files
```bash
git add .
```

### 5. Create Initial Commit
Following the commit conventions from GIT-USAGE.md:

```bash
git commit -m "feat: initial commit - osmocys risk operating system

- backend: spring boot application with multi-tenant support
- frontend: react + typescript + vite application
- authentication: jwt-based authentication system
- database: postgresql with liquibase migrations
- workflow: flowable bpmn integration
- ui/ux: native react components with shadcn/ui
- analytics: comprehensive reporting and dashboard system
- library: framework and control library management
- modules: identify, define, control, assess, assure, audit, remediate, monitor, improve"
```

### 6. Push to Remote Repository
```bash
git push -u origin main
```

If the default branch is `master` instead of `main`:
```bash
git push -u origin master
```

Or if you need to create the main branch:
```bash
git branch -M main
git push -u origin main
```

## Commit Message Convention

Based on GIT-USAGE.md, use these prefixes:
- `fix:` for bug fixes
- `feat:` for new features
- `perf:` for performance improvements
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding missing tests
- `chore:` for chore tasks

All commit messages should be in lowercase.

## Verification

After pushing, verify the repository:
```bash
git remote -v
git log --oneline
```


