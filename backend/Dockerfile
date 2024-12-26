# Use official Python image
FROM python:3.9-slim

RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates
# Set working directory
WORKDIR /app

# Copy application files (relative to backend folder)
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose API port
EXPOSE 8000

# Command to run the API
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
