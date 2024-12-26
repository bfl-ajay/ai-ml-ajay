import React from "react";

const EmotionResults = ({ results }) => {
    return (
        <div>
            <h2>Emotion Analysis</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        {result.emotion}: {result.intensity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmotionResults;
