# Demo Deploy — NORMAL DANCE

Prerequisites
- Node.js LTS
- Optional: Supabase project (for auth/CRUD)

Local
- npm install
- npm run dev → http://localhost:3000

Vercel
- Import repo → Framework: Vite
- Root: /
- Build Command: vite build
- Output Dir: dist
- Env (optional): SUPABASE_URL, SUPABASE_ANON_KEY, IPFS keys

Netlify
- Build Command: vite build
- Publish directory: dist

Notes
- Auth/CRUD are optional; IPFS has mock fallback
- For demo content, add a few audio files or use existing SoundHelix URLs
