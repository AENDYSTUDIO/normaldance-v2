# 🔧 Environment Setup Guide

## Quick Start

1. **Copy the example file:**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Fill in your credentials** (see sections below)

---

## 📝 Required Variables

### Supabase (Backend)

Get these from: <https://supabase.com/dashboard/project/_/settings/api>

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**How to get:**

1. Create a project on Supabase
2. Go to Settings → API
3. Copy "Project URL" → `VITE_SUPABASE_URL`
4. Copy "anon/public" key → `VITE_SUPABASE_ANON_KEY`

---

## 🌐 Optional: IPFS Storage

### Option 1: Pinata (Recommended - Easier)

Get these from: <https://pinata.cloud/>

```env
VITE_PINATA_API_KEY=your-pinata-api-key
VITE_PINATA_SECRET_API_KEY=your-pinata-secret
VITE_PINATA_GATEWAY=https://black-permanent-silkworm-301.mypinata.cloud/ipfs/
```

**How to get:**

1. Sign up at Pinata.cloud
2. Go to API Keys → New Key
3. Enable "pinFileToIPFS" permission
4. Copy API Key and Secret
5. Your gateway URL is already set!

### Option 2: Infura IPFS

Get these from: <https://infura.io/>

```env
VITE_IPFS_PROJECT_ID=your-infura-project-id
VITE_IPFS_PROJECT_SECRET=your-infura-secret
VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
```

**How to get:**

1. Sign up at Infura.io
2. Create new IPFS project
3. Copy Project ID and Secret

---

## 🎯 Configuration Scenarios

### Minimal (Just Database)

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

✅ Works with mock data for tracks
❌ No file uploads to IPFS

### Recommended (Database + IPFS)

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
VITE_PINATA_API_KEY=xxx
VITE_PINATA_SECRET_API_KEY=xxx
VITE_PINATA_GATEWAY=https://black-permanent-silkworm-301.mypinata.cloud/ipfs/
```

✅ Full functionality
✅ Decentralized file storage
✅ Music uploads work

---

## 🔄 Fallback System

The app uses a smart fallback system:

1. **IPFS via Infura** (if configured)
   ↓ fails
2. **IPFS via Pinata** (if configured)
   ↓ fails
3. **Mock Upload** (blob URLs for development)

This means the app works even without IPFS configured!

---

## ✅ Verify Setup

After configuring, check the browser console:

```
✅ [Supabase] Connected
✅ [IPFS] Using Pinata gateway
```

Or if not configured:

```
⚠️ [Supabase] Not configured. Using mock data.
⚠️ [IPFS] Not configured. Using mock upload.
```

---

## 🚀 Next Steps

1. Configure at minimum: **Supabase**
2. Optional but recommended: **Pinata**
3. Run: `npm run dev`
4. Test upload functionality on `/upload` page
