/** @format */

import Ajv from "ajv";

const ajv = new Ajv();

/**
 * Validates whether a given string is a valid JSON schema.
 * @param schemaString The schema string to validate.
 * @returns True if the string is a valid JSON schema, false otherwise.
 */
export const isValidJsonSchema = (schemaString: string): boolean => {
    try {
        const schema = JSON.parse(schemaString);
        const validate = ajv.compile(schema);
        return validate !== null;
    } catch {
        return false;
    }
};

/**
 * Parses a JSON schema and returns the result.
 * @param schemaString The schema string to parse.
 * @returns An object containing the parsed schema or an error message.
 */
export const safeSchemaParse = (
    schemaString: string
): { schema: object | null; error: string | null } => {
    // console.log("Parsing schema:", schemaString); // Debugging log
    try {
        const schema = JSON.parse(schemaString);
        return { schema, error: null };
    } catch (error) {
        // console.error("Schema parsing error:", error); // Debugging log
        return { schema: null, error: "Invalid JSON schema format" };
    }
};
