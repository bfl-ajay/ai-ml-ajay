from fastapi import FastAPI
from app.model import EmotionClassifier
from app.schemas import EmotionResponse, EmotionPrediction

app = FastAPI()
model = EmotionClassifier()

@app.post("/analyze", response_model=EmotionResponse)
async def analyze_emotions(content: str):
    probabilities = model.predict_emotions(content)
    emotions = ["joy", "sadness", "anger", "fear", "surprise", "love"]  # Based on the model's labels
    predictions = [
        {"emotion": emotion, "intensity": round(prob, 2)}
        for emotion, prob in zip(emotions, probabilities)
    ]
    return {"input_text": content, "predictions": predictions}
