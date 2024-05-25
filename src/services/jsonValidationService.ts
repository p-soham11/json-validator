/** @format */

import Ajv, { ValidateFunction, ErrorObject } from "ajv";
import { safeJsonParse, ParseResult } from "../utils/jsonUtils";
import { safeSchemaParse } from "../utils/schemaUtils";

const ajv = new Ajv();

export interface ValidationResult {
    isValid: boolean;
    errors: ValidateFunction["errors"] | null;
}

export const validateJsonAgainstSchema = (
    json: string,
    schema: string
): ValidationResult => {
    const jsonResult: ParseResult<object> = safeJsonParse(json);
    const schemaResult = safeSchemaParse(schema);

    if (jsonResult.error || schemaResult.error) {
        return {
            isValid: false,
            errors: [
                {
                    instancePath: "",
                    schemaPath: "",
                    keyword: "parsing",
                    params: {},
                    message:
                        jsonResult.error ||
                        schemaResult.error ||
                        "Unknown parsing error",
                },
            ],
        };
    }

    try {
        const validate = ajv.compile(schemaResult.schema as object);
        const isValid = validate(jsonResult.data as object);
        return {
            isValid,
            errors: validate.errors,
        };
    } catch (error) {
        const errors: ErrorObject[] = [
            {
                instancePath: "",
                schemaPath: "",
                keyword: "validation",
                params: {},
                message: "Schema compilation or validation error",
            },
        ];
        return {
            isValid: false,
            errors,
        };
    }
};
