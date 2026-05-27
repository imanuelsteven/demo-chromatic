# Storybook Sample from `presentation.html`

This workspace now includes a runnable **React + Vite + Storybook** sample project that mirrors the design direction from `presentation.html`.

## What was checked in `presentation.html`

The current deck file contains a strong visual system that we reused as a component foundation:

- Color tokens (`--navy`, `--accent`, `--teal`, `--muted`, etc.)
- Reusable layout patterns (cover split layout, card surfaces, agenda blocks)
- Consistent typography hierarchy (tag/title/subtitle/meta labels)

Those patterns were extracted into reusable UI components and Storybook stories.

## Project structure

- `storybook/main.js` — Storybook configuration (React + Vite)
- `storybook/preview.js` — global Storybook setup and styles
- `storybook/stories/` — all Storybook story files in one dedicated folder
- `src/styles/theme.css` — shared design tokens and component styles
- `src/components/CoverSlide.jsx` — cover slide component based on your presentation style
- `src/components/DesignTokenCard.jsx` — token documentation component
- `src/components/Button.jsx` — reusable button primitive with `accent`, `teal`, `danger`, `ghost` variants
- `src/components/Panel.jsx` — reusable content panel/card primitive with tonal styles
- `src/components/Badge.jsx` — compact status badge primitive
- `src/test/CoverSlide.test.jsx` — component behavior test
- `src/test/UIPrimitives.test.jsx` — tests for button/panel/badge primitives
- `visual-regression/chromatic/chromatic.config.json` — Chromatic settings for Storybook visual tests
- `visual-regression/chromatic/README.md` — Chromatic integration notes
- `.github/workflows/chromatic.yml` — CI workflow for Chromatic on PRs and `main`

## Basic components added

To support your request for reusable basics (buttons, panels, etc.), this sample now includes:

- **Button** (`Presentation/Button` in Storybook)
   - Variants: `accent`, `teal`, `danger`, `ghost`
   - Sizes: `md`, `sm`
   - Use for primary/secondary actions in review and workshop screens

- **Panel** (`Presentation/Panel` in Storybook)
   - Tones: `default`, `accent`, `teal`, `danger`
   - Structured slots: `title`, `subtitle`, `children`, `footer`
   - Use for scope notes, review outcomes, or feature summary cards

- **Badge** (`Presentation/Badge` in Storybook)
   - Tones: `accent`, `teal`, `danger`, `muted`
   - Use for quick status indicators like Draft/Approved/Blocked

## Setup process

### 1) Install dependencies

```bash
npm install
```

### 2) Run Storybook locally

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006`.

### 3) Build static Storybook output

```bash
npm run build-storybook
```

Output folder: `storybook-static/`

### 4) Optional quality checks

```bash
npm run lint
npm run test
npm run build
```

### 5) Run visual regression checks with Chromatic

```bash
npm run chromatic
```

Required environment variable:

- `CHROMATIC_PROJECT_TOKEN`

## Why Storybook is useful for this design

Storybook acts as **living documentation** for UI implementation:

1. **Single source of UI truth**
   - Each component state is documented as a story.
   - Design intent from `presentation.html` is explicit and reviewable.

2. **Safer collaboration**
   - Developers can implement in isolation without waiting for full page integration.
   - Designers can review visuals/state behavior directly.

3. **Faster review cycle**
   - UI regressions are visible early.
   - Component-level review is faster than reviewing whole pages/slides.

4. **Reusable component contracts**
   - Component props become a shared API between frontend engineers and feature teams.
   - Stories provide practical examples of valid/invalid usage.

## How Storybook maintains consistency between developers and software engineers

Storybook improves consistency in three layers:

- **Visual consistency**
  - Shared `theme.css` design tokens keep colors, spacing, and typography aligned.
  - Story variants enforce consistent rendering of common states.

- **Behavior consistency**
  - Tests validate key rendering assumptions (`CoverSlide` content and agenda states).
  - Stories document expected behavior for each prop combination.

- **Process consistency**
  - PR reviews can reference the same stories instead of static screenshots.
  - Teams can agree on “done” at component level (token usage + story coverage + test pass).

In short, Storybook bridges design and engineering by making UI decisions inspectable, testable, and reusable.

## What Chromatic is

Chromatic is a **visual regression testing platform for Storybook**.

- It takes snapshots of your stories in a cloud environment.
- It compares the latest snapshots against the baseline from previous accepted builds.
- It highlights pixel-level UI differences so reviewers can approve intentional changes or catch unintended regressions.

Think of Storybook as the component catalog, and Chromatic as the automated visual reviewer of that catalog.

## How Chromatic works

1. Your CI (or local command) runs `npm run chromatic`.
2. Chromatic builds Storybook using `storybook/` config.
3. Every story is rendered and snapshotted in Chromatic’s environment.
4. Chromatic compares this run with the previous accepted baseline.
5. On changes, PR reviewers see exactly which stories changed and by how much.
6. Reviewers approve expected changes, which become the new baseline.

## How Chromatic integrates with Storybook in this project

This project integration is split into dedicated folders:

- **Storybook folder**: `storybook/`
   - `main.js` points Storybook to `storybook/stories/**`.
   - `preview.js` loads global design styles from `src/styles/theme.css`.

- **Visual regression folder**: `visual-regression/chromatic/`
   - `chromatic.config.json` defines Chromatic behavior (`storybookConfigDir`, changed-story optimization, etc.).

- **CI integration**: `.github/workflows/chromatic.yml`
   - Runs on pull requests and pushes to `main`.
   - Uses `CHROMATIC_PROJECT_TOKEN` from repo secrets.

This setup keeps component documentation and visual testing organized and separated, while still tightly connected.

## Next practical improvements (optional)

- Add more stories for other slide patterns in `presentation.html` (table, checklist, steps, state-grid).
- Add stricter Chromatic branch rules (for example required approval before merge).
- Add accessibility checks to CI for every story.
