/** @format */

import React from "react";

interface SchemaInputProps {
    onSchemaChange: (schema: string) => void;
}

const SchemaInput: React.FC<SchemaInputProps> = ({ onSchemaChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onSchemaChange(e.target.value);
    };

    return (
        <div>
            <h2>Schema Input</h2>
            <textarea onChange={handleChange} rows={10} cols={50} />
        </div>
    );
};

export default SchemaInput;
