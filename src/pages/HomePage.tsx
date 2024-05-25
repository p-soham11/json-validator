/** @format */

import React, { useState } from "react";
import JsonInput from "../components/JsonInput";
import SchemaInput from "../components/SchemaInput";
import ValidationResult from "../components/ValidationResult";
import { JsonSchemaContextProvider } from "../context/JsonSchemaContext";
import useValidation from "../hooks/useValidation";

const HomePage: React.FC = () => {
    const [json, setJson] = useState<string>("");
    const [schema, setSchema] = useState<string>("");
    const { validationResult, validateJson } = useValidation();

    const handleJsonChange = (newJson: string) => {
        setJson(newJson);
        validateJson(newJson, schema);
    };

    const handleSchemaChange = (newSchema: string) => {
        setSchema(newSchema);
        validateJson(json, newSchema);
    };

    return (
        <JsonSchemaContextProvider>
            <div>
                <h1>JSON Validator</h1>
                <SchemaInput onSchemaChange={handleSchemaChange} />
                <JsonInput onJsonChange={handleJsonChange} />
                <ValidationResult
                    isValid={validationResult.isValid}
                    errors={validationResult.errors}
                />
            </div>
        </JsonSchemaContextProvider>
    );
};

export default HomePage;
