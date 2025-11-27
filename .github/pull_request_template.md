# Summary
- What does this PR change and why?

# Changes
- [ ] Fixes / Refactors
- [ ] UX / UI
- [ ] Tooling / DX
- [ ] Tests

# How to Test
1. `npm install`
2. `npm run prepare`
3. `npm run dev` and verify the following:
   - `/trends` and `/nft` load without errors
   - Playing a track from `/trends` starts the player and controls work
   - Reloading preserves player state (track/position), but doesn't autoplay
4. `npm run typecheck` should pass cleanly
5. `npm run lint` to check code style
6. `npm run test` to run basic tests

# Screenshots / Videos (optional)

# Checklist
- [ ] I have tested these changes locally
- [ ] I have added/updated documentation where necessary
- [ ] I have considered accessibility and performance impacts
- [ ] If applicable, I updated CHANGELOG.md
