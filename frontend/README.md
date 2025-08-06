# CoreAlpha v1.0 MVP

En AI-baserad tradingcoach byggd på Mirror Suite OS.

## Funktioner
- Välj strategi (CoachDeck)
- AI-förklaring via ExplainScore
- XP-system med nivå och badge
- Ghostmatcher med beslut → XP

## Kör lokalt
### Frontend:
```bash
cd frontend
npm install
npm run dev
```
### Backend:
```bash
cd backend
uvicorn main:app --reload
```

## 🌐 Miljövariabler för frontend (Vercel)

Lägg till följande variabel i Vercel eller `.env` lokalt:

```
VITE_BACKEND_URL=https://corealpha-backend.onrender.com
```

Den används i alla fetch-anrop till backend.
