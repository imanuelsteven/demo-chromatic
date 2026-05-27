# Chromatic integration

This folder contains Chromatic-specific configuration for visual regression testing of Storybook.

## Files

- `chromatic.config.json`: shared Chromatic CLI settings used by `npm run chromatic`.

## Required environment variable

- `CHROMATIC_PROJECT_TOKEN`: Chromatic project token generated from your Chromatic dashboard.

## Local run

Use the root project script:

`npm run chromatic`

## CI usage

For GitHub Actions, store `CHROMATIC_PROJECT_TOKEN` in repository secrets and use the workflow template at `.github/workflows/chromatic.yml`.