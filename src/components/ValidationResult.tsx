/** @format */

import React from "react";
import { ValidateFunction } from "ajv";

interface ValidationResultProps {
    isValid: boolean;
    errors: ValidateFunction["errors"] | null;
}

const ValidationResult: React.FC<ValidationResultProps> = ({
    isValid,
    errors,
}) => {
    return (
        <div>
            <h2>Validation Result</h2>
            {isValid ? (
                <p style={{ color: "green" }}>
                    JSON is valid against the schema.
                </p>
            ) : (
                <div style={{ color: "red" }}>
                    <p>JSON is invalid against the schema.</p>
                    <ul>
                        {errors?.map((error, index) => (
                            <li key={index}>{error.message}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ValidationResult;
