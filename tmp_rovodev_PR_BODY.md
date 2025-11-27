# PR: Toast вместо alert, isBrowser-гарды, Strict TS; тесты ProtectedRoute и переходов плеера

## Summary
- UX: заменён alert на toast при отсутствии MetaMask (web3Service.connectMetaMask).
- Надёжность: добавлены isBrowser-гарды и безопасные обёртки вокруг window/localStorage.
- Качество: включён строгий режим TypeScript (strict: true) с корректировками для совместимости.
- Тесты: добавлены проверки ProtectedRoute и переходов плеера (repeat/shuffle/previous).

## Changes
- services/web3.ts:
  - alert → useToastStore.getState().addToast(..., 'warning').
  - isMetaMaskInstalled теперь проверяет наличие window и window.ethereum.
- services/db.ts:
  - добавлены safeGetItem/safeSetItem/safeRemoveItem с проверкой isBrowser() и try/catch.
  - все обращения к localStorage через безопасные обёртки.
- stores/useTracksStore.ts:
  - запись в localStorage обёрнута в try и проверку typeof window !== 'undefined'.
- App.tsx:
  - проверка requestIdleCallback через typeof window !== 'undefined'.
- tsconfig.json:
  - включён "strict": true.
- tests/routes.protectedRoute.test.tsx — новые тесты ProtectedRoute.
- tests/player.transitions.test.ts — новые тесты переходов плеера.

## How to test
1) npm install
2) npm run test — должно быть 11 файлов / 42 тестов зелёными
3) npm run typecheck — без ошибок
4) npm run dev — при отсутствии MetaMask появится toast вместо alert

## Notes
- Toast использует Zustand store напрямую через useToastStore.getState(), поэтому работает в сервисе без React‑контекста.
- Гарды предотвращают падения в средах без браузера (SSR, тесты) и при ограничениях localStorage.
- При желании можно дополнительно заменить прямые записи в localStorage из stores на вызовы db, чтобы унифицировать слой персистентности.
