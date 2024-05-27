/** @format */

import React from "react";
import "../assets/styles/HomePage.css";

interface JsonInputProps {
    onJsonChange: (json: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ onJsonChange }) => {
    const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onJsonChange(e.target.value);
    };

    return (
        <div>
            <h2 style={{color:"#8B93FF"}}>JSON Input</h2>
            <textarea onChange={handleJSONChange}  rows={30} cols={40} />
        </div>
    );
};

export default JsonInput;
