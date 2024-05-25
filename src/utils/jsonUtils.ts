/** @format */

export interface ParseResult<T> {
    data: T | null;
    error: string | null;
}

/**
 * Safely parses a JSON string and returns the result.
 * @param jsonString The JSON string to parse.
 * @returns An object containing the parsed data or an error message.
 */
export const safeJsonParse = <T>(jsonString: string): ParseResult<T> => {
    try {
        const data = JSON.parse(jsonString);
        return { data, error: null };
    } catch (error) {
        return { data: null, error: "Invalid JSON format" };
    }
};

/**
 * Validates whether a given string is a valid JSON.
 * @param jsonString The JSON string to validate.
 * @returns True if the string is valid JSON, false otherwise.
 */
export const isValidJson = (jsonString: string): boolean => {
    try {
        JSON.parse(jsonString);
        return true;
    } catch {
        return false;
    }
};
