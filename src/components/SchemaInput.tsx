/** @format */

import React from "react";
import "../assets/styles/HomePage.css";

interface SchemaInputProps {
    onSchemaChange: (schema: string) => void;
}

const SchemaInput: React.FC<SchemaInputProps> = ({ onSchemaChange }) => {
    const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onSchemaChange(e.target.value);
    };

    return (
        <div>
            <h2 style={{color:"#8B93FF"}}>Schema Input</h2>
            <textarea onChange={handleSchemaChange} rows={30} cols={40} />
        </div>
    );
};

export default SchemaInput;
