# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Pending changes

## [0.1.0] - 2025-11-26
### Fixed
- Layout crash risk: replace direct `motion.div` with `LazyMotionDiv` to avoid framer-motion import issues while preserving lazy-loading.

### Changed
- Trends and NFT pages refactored to use Zustand stores instead of route props.
- Player store now persists state across reloads (track, playlist, position, volume, repeat/shuffle) using `zustand/middleware`.
- Added SEO to Trends and NFT pages.
- Added `loading="lazy"` to images across Feed, Explore, Library, Trends, NFT for perf.

### Added
- Tooling: ESLint, Prettier, Husky (pre-commit with lint-staged), Vitest setup (`jsdom`, setup file), basic store tests.
- PR_DESCRIPTION.md with test instructions and verification steps.

### Notes
- Type-check excludes tests to keep `tsc --noEmit` clean; tests run via Vitest separately.
