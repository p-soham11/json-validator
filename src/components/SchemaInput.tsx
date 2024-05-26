/** @format */

import React from "react";

interface SchemaInputProps {
    onSchemaChange: (schema: string) => void;
}

const SchemaInput: React.FC<SchemaInputProps> = ({ onSchemaChange }) => {
    const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onSchemaChange(e.target.value);
    };

    return (
        <div>
            <h2>Schema Input</h2>
            <textarea onChange={handleSchemaChange} rows={10} cols={50} />
        </div>
    );
};

export default SchemaInput;
