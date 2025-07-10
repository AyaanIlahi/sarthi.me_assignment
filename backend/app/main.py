from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import choice, uniform

app = FastAPI()

# Allow frontend (React) to call the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # In production, replace * with specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the input format using Pydantic
class Reflection(BaseModel):
    text: str

# List of mock emotions
emotions = ["Happy", "Sad", "Anxious", "Excited", "Angry", "Neutral", "Confused"]

# POST endpoint to analyze emotion
@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    emotion = choice(emotions)
    confidence = round(uniform(0.7, 0.99), 2)
    return {
        "emotion": emotion,
        "confidence": confidence
    }