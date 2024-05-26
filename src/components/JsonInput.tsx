/** @format */

import React from "react";

interface JsonInputProps {
    onJsonChange: (json: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ onJsonChange }) => {
    const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onJsonChange(e.target.value);
    };

    return (
        <div>
            <h2>JSON Input</h2>
            <textarea onChange={handleJSONChange} rows={10} cols={50} />
        </div>
    );
};

export default JsonInput;
