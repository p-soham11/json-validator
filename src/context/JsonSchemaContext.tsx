/** @format */

import React, { createContext, useState, ReactNode } from "react";

interface JsonSchemaContextProps {
    schema: string;
    setSchema: (schema: string) => void;
}

export const JsonSchemaContext = createContext<JsonSchemaContextProps>({
    schema: "",
    setSchema: () => {},
});

export const JsonSchemaContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [schema, setSchema] = useState<string>("");

    return (
        <JsonSchemaContext.Provider value={{ schema, setSchema }}>
            {children}
        </JsonSchemaContext.Provider>
    );
};
