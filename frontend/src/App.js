import React, { useState } from "react";
import TextInput from "./components/TextInput";
import EmotionResults from "./components/EmotionResults";
import axios from "axios";

const App = () => {
    const [results, setResults] = useState(null);

    const analyzeEmotions = async (text) => {
        try {
            const response = await axios.post("http://localhost:8000/analyze", { content: text });
            setResults(response.data.predictions);
        } catch (error) {
            console.error("Error analyzing emotions:", error);
        }
    };

    return (
        <div>
            <h1>Emotion Intensity Analysis</h1>
            <TextInput onAnalyze={analyzeEmotions} />
            {results && <EmotionResults results={results} />}
        </div>
    );
};

export default App;
