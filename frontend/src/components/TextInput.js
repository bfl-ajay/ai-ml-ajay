import React, { useState } from "react";

const TextInput = ({ onAnalyze }) => {
    const [text, setText] = useState("");

    const handleAnalyze = () => {
        if (text.trim()) {
            onAnalyze(text);
        }
    };

    return (
        <div>
            <textarea
                rows="5"
                cols="50"
                placeholder="Enter text to analyze emotions..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <br />
            <button onClick={handleAnalyze}>Analyze</button>
        </div>
    );
};

export default TextInput;
