/** @format */

import { useState, useCallback } from "react";
import {
    ValidationResult,
    validateJsonAgainstSchema,
} from "../services/jsonValidationService";

const useValidation = () => {
    const [validationResult, setValidationResult] = useState<ValidationResult>({
        isValid: true,
        errors: null,
    });

    const validateJson = useCallback((json: string, schema: string) => {
        const result = validateJsonAgainstSchema(json, schema);
        setValidationResult(result);
    }, []);

    return { validationResult, validateJson };
};

export default useValidation;
