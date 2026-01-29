# git-wt-test-repo

Test repository for [git-wt](https://github.com/raisedadead/git-wt) development.

## What is this?

This repository serves as a test bed for developing and testing git-wt, a Git worktree manager with bare repo support.

## Features for Testing

- Node.js project structure
- `.envrc` for direnv integration testing
- `.env` files for environment variable copying
- `.vscode/` for editor config copying
- `CLAUDE.md` for Claude Code integration
- GitHub Issues with various labels
- GitHub PRs in various states

## Usage

```bash
# Clone with git-wt
git wt clone git@github.com:raisedadead/git-wt-test-repo.git

# Create worktree from issue
git wt new --issue 1

# Create worktree from PR
git wt new --pr 1
```

## License

MIT
