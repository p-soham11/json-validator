/** @format */

import React, { useState } from "react";
import JsonInput from "../components/JsonInput";
import SchemaInput from "../components/SchemaInput";
import ValidationResult from "../components/ValidationResult";
import { JsonSchemaContextProvider } from "../context/JsonSchemaContext";
import useValidation from "../hooks/useValidation";
import "../assets/styles/HomePage.css";

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
            <div className="container">
                <h1>
                    <span style={{color:"#7BC9FF"}}>&#123;</span> <span>&nbsp;</span><span style={{color:"#A3FFD6"}}>&#125;</span> JSON Validator
                </h1>
                <div className="sub-container">
                    <div className="card">
                         <SchemaInput onSchemaChange={handleSchemaChange} />
                    </div> 
                    <div className="card">
                        <JsonInput onJsonChange={handleJsonChange} />
                    </div>

                    
                </div>  
                <ValidationResult
                    isValid={validationResult.isValid}
                    errors={validationResult.errors}
                />
            </div>
        </JsonSchemaContextProvider>
    );
};

export default HomePage;











