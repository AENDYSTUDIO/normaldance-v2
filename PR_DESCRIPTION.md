# PR: Fix layout motion, refactor Trends/NFT to Zustand, persist player state; add SEO, lazy images, and test/tooling setup

## Summary
- Fix: заменён `motion.div` на `LazyMotionDiv` в `Layout` (убран риск падения из‑за прямого импорта framer-motion, сохранена ленивость).
- Refactor: страницы `Trends` и `NFT` перестали ожидать пропсы — используют Zustand (`useTracksStore`/`usePlayerStore`).
- UX: плеер сохраняет состояние между перезагрузками (`currentTrack`, `playlist`, `volume`, `repeat`, `shuffle`, `currentTime`) через `persist`.
- SEO: добавлен SEO на страницы `Trends` и `NFT`.
- Perf: изображения в списках теперь с `loading="lazy"`.
- Tooling: добавлены ESLint/Prettier/Husky/Vitest конфиги; tsc не зависит от vitest типов (исключены тесты из tsconfig). 

## Changes
- `components/Layout.tsx`: `motion.div` → `LazyMotionDiv` с `layoutId`.
- `pages/Trends.tsx`: переход на Zustand, добавлен `SEO`, `loading="lazy"` для изображений.
- `pages/NFT.tsx`: переход на Zustand, добавлен `SEO`, `loading="lazy"` для изображений.
- `pages/Feed.tsx`, `pages/Explore.tsx`, `pages/Library.tsx`: `loading="lazy"` для изображений.
- `stores/usePlayerStore.ts`: добавлен `persist` с `partialize` для сохранения ключевых полей.
- `components/AudioPlayer.tsx`, `components/SEO.tsx`, `routes/AppRoutes.tsx`: минорные правки импортов/типов.
- `vite.config.ts`: добавлен `test` блок Vitest (`jsdom`, `setupFiles`).
- `tsconfig.json`: добавлен `exclude` для `tests/**/*`.
- Добавлены файлы: `.eslintrc.cjs`, `.eslintignore`, `.prettierrc`, `.prettierignore`, `.husky/pre-commit`, `vitest.setup.ts`.
- Тесты: `tests/playerStore.test.ts`, `tests/tracksStore.test.ts` (базовые smoke‑тесты стора).

## How to test
1. Установка:
   - `npm install`
   - `npm run prepare` (инициализация Husky)
2. Локальный запуск:
   - `npm run dev`
   - Проверить `/trends` и `/nft` — странички открываются без ошибок
   - В `/trends` клик по треку запускает плеер, работает next/prev/repeat/shuffle
   - Перезагрузка сохраняет текущий трек и позицию (автоплей — выключен)
3. Проверки качества:
   - `npm run typecheck` — без ошибок
   - `npm run lint` — без критичных ошибок
   - `npm run test` — запускает базовые тесты

## Notes
- Для строгой интеграции тестов в `tsconfig.json` можно вернуть типы `vitest` и `@testing-library/jest-dom`, но это добавит их в общий тайпчек. Сейчас тесты запускаются изолированно через Vitest.
- Следующие шаги: улучшение UX загрузки (статусы/прогресс/ошибки), расширение покрытия тестами (AudioPlayer/Upload), интеграция Supabase.
