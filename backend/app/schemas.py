from pydantic import BaseModel
from typing import List

class EmotionPrediction(BaseModel):
    emotion: str
    intensity: float

class EmotionResponse(BaseModel):
    input_text: str
    predictions: List[EmotionPrediction]
