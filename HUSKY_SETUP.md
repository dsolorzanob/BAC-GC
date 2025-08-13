# 🐕 Husky Setup - Pre-commit Hooks

This project is configured with **Husky** to prevent code commits that do not meet quality standards.

## 🚫 What does Husky prevent?

### 1. **TypeScript Errors**

- Run `tsc --noEmit` before each commit
- If there are type errors, **the commit is NOT allowed**
- Ensure that the code compiles correctly

### 2. **Failed Tests**

- Run `vitest run` (tests in CI mode)
- If any test fails, **the commit is NOT allowed**
- Ensure that functionality is not broken

### 3. **Linting Issues**

- Run `eslint --fix` on modified files
- If there are ESLint errors, **commits are not allowed**
- Maintains code consistency

### 4. **Inconsistent Code Formatting**

- Run `prettier --write` on modified files
- Automatically format code before committing
- Maintain consistent style throughout the project

## 🔧 Available Commands

```bash
# Run type-check manually
pnpm type-check

# Run tests in CI mode
pnpm test:ci

# Run tests in watch mode (development)
pnpm test

# Run linting
pnpm lint

# Run lint-staged manually
pnpm lint-staged
```

## 📁 Configuration Files

- **`.husky/pre-commit`**: Hook that runs before each commit
- **`.prettierrc`**: Prettier configuration for formatting
- **`.prettierignore`**: Files that should not be formatted
- **`package.json`**: Scripts and lint-staged configuration

## 🚀 Workflow

1. **Make changes** to your code
2. **Add files** with `git add`
3. **Try to commit** with `git commit`
4. **Husky runs automatically**:
   - ✅ Verifies TypeScript types
   - ✅ Runs tests
   - ✅ Runs linting and formatting
5. **If everything passes**: Successful commit ✅
6. **If something fails**: Commit blocked ❌

## 🆘 Troubleshooting

### TypeScript errors

```bash
pnpm type-check
# Fix the errors shown
```

### Failed tests

```bash
pnpm test:ci
# Fix the failing tests
```

### Linting errors

```bash
pnpm lint
# Fix the ESLint errors
```

### Code formatting

```bash
pnpm lint-staged
# Automatically format the files
```

## 💡 Tips

- **Run commands manually** before committing to detect problems early
- **Use `pnpm test`** during development for tests in watch mode
- **Use `pnpm test:ci`** to verify everything works before committing
- **Keep your code formatted** to avoid conflicts in lint-staged

With this configuration, your code will always be clean and functional! 🎉
