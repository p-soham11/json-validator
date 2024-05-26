/** @format */

export interface ParseResult<T> {
    data: T | null;
    error: string | null;
}

export const safeJsonParse = <T>(jsonString: string): ParseResult<T> => {
    try {
        const data = JSON.parse(jsonString);
        // console.log(data);
        return { data, error: null };
    } catch (error) {
        return { data: null, error: "Invalid JSON format" };
    }
};

export const isValidJson = (jsonString: string): boolean => {
    try {
        JSON.parse(jsonString);
        return true;
    } catch {
        return false;
    }
};
