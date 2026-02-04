# Test Repository (wt Fixture)

This repository serves as a **fixture** for [wt](https://github.com/raisedadead/wt) integration tests.

> **Warning**: Do not delete branches or files without updating the wt integration tests.

## Purpose

This repo simulates a "real user's project" that wt's integration tests clone and operate on. The wt integration tests are the single source of truth for testing - this repo only validates that the fixture remains intact.

## Protected Branches

These branches **must exist** for wt integration tests to pass:

| Branch                | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `main`                | Default branch                                      |
| `develop`             | Development branch                                  |
| `feature/auth`        | Feature branch with slash (tests branch flattening) |
| `feature/nested/deep` | Deeply nested feature branch                        |
| `bugfix-123`          | Simple bugfix branch                                |

## Required Files

The following files must exist in the repository:

- `.git-wt.toml` - wt configuration with hooks
- `.env` - Environment variables
- `.envrc` - direnv configuration
- `.gitignore` - Git ignore rules
- `.nvmrc` - Node version specification
- `package.json` - NPM package file
- `src/app.js` - Application source
- `src/index.js` - Index source
- `tests/example.test.js` - Example test file

## CI Validation

The `validate-fixture.yml` workflow runs on every push/PR and weekly to ensure:

1. All required branches exist on origin
2. All required files exist
3. `.git-wt.toml` contains required configuration

## Making Changes

If you need to modify this fixture:

1. Update the wt integration tests first if needed
2. Ensure all required branches and files remain intact
3. Verify wt integration tests still pass after changes
