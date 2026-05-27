# JPT — Your AI Personal Trainer

> A full-stack AI chat application powered by GPT-4o Mini, built with FastAPI and React.

**GitHub:** https://github.com/Naknik3/jpt

---

## Overview

JPT lets you have a real-time conversation with an AI personal trainer. Each chat session is stored in MongoDB so the AI maintains full memory of your conversation history, giving you coherent, context-aware responses.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Redux Toolkit, Vite |
| Backend | Python, FastAPI, Pydantic |
| AI | OpenAI GPT-4o Mini |
| Database | MongoDB (async via Motor) |

---

## Project Structure

```
jpt/
├── backend/
│   └── src/
│       ├── controllers/   # Route handlers
│       ├── services/      # Business logic & OpenAI integration
│       ├── models/        # Pydantic request/response models
│       └── utils/         # Config, DAL (MongoDB)
├── frontend/
│   └── src/
│       ├── Components/    # Layout, Header, Footer, Menu
│       ├── Screens/       # Jpt (chat), About, NotFound
│       ├── Services/      # Axios API calls
│       ├── store/         # Redux slices
│       └── utils/         # App config
└── database/
```

---

## Getting Started

### Backend

```bash
cd backend
python -m venv env
source env/bin/activate      # Windows: env\Scripts\activate
pip install -r requierments.txt
```

Create a `.env` file in `backend/`:

```env
DATABASE_URL=mongodb://localhost:27017/jpt
OPENAI_KEY=your_openai_api_key
```

```bash
uvicorn src.app:app --reload --port 3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/chat` | Send a message and get an AI response |
| `GET` | `/conversations/:id` | Fetch conversation history |
| `GET` | `/health` | Health check |

---

## Features

- Persistent conversation memory across the session
- New chat button to start a fresh conversation
- Smooth auto-scroll to latest message
- Loading indicator while awaiting AI response
- Security headers + CORS protection
- Input validation on both frontend and backend
