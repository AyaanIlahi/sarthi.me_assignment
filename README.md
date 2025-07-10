# Emotion Reflection Tool — Internship Assignment (Saarthi.me)

This is a full-stack web app built as part of the internship assignment for **Saarthi.me**.  
It allows users to reflect on their emotions by submitting short texts, and returns a mock emotional analysis.

---

## 🔧 Tech Stack

- **Frontend**: React (TypeScript)
- **Backend**: Python (FastAPI)
- **Integration**: REST API (localhost)

---

## Features

- Mobile-first design with a clean textarea form
- Flash-card style emotion result display
- Animated loading spinner during API call
- Color-coded cards based on detected emotion
- Handles success & error states gracefully
- CORS secured to only allow frontend access

---

## 📦 Folder Structure

saarthi.me_assignment/
├── backend/
│ ├── app/
│ │ └── main.py ← FastAPI backend logic
│ └── requirements.txt ← Python dependencies
├── frontend/
│ ├── public/
│ └── src/
│ ├── App.tsx ← React main component
│ └── App.css ← Styles (form, spinner, flashcard)
│ └── package.json ← React setup
├── README.md ← You're here!
---

## How to Run Locally

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
FastAPI will be live at:
📍 http://localhost:8000
Docs available at:
📍 http://localhost:8000/docs

### Frontend (React + TypeScript)
```bash
cd frontend
npm install
npm start
```
React will be live at:
📍 http://localhost:3000
---
### API Example
POST /analyze

Request:
```
json
{
  "text": "I feel nervous about my first job interview"
}
```
Response:
```
json
{
  "emotion": "Anxious",
  "confidence": 0.87
}