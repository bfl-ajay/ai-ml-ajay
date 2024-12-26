from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

class EmotionClassifier:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("bhadresh-savani/bert-base-go-emotion")
        self.model = AutoModelForSequenceClassification.from_pretrained("bhadresh-savani/bert-base-go-emotion")

    def predict_emotions(self, text):
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
        outputs = self.model(**inputs)
        logits = outputs.logits
        probabilities = torch.sigmoid(logits).detach().numpy()[0]
        return probabilities
