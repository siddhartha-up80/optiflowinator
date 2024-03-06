"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CodeEditorContextType {
  codeValue: string;
  updateCodeValue: (newValue: string) => void;
}

const CodeEditorContext = createContext<CodeEditorContextType | undefined>(
  undefined
);

export const CodeEditorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [codeValue, setCodeValue] = useState<string>(
    `print("Welcome to OptiFlow Inator")`
  );

  const updateCodeValue = (newValue: string) => {
    setCodeValue(newValue);
  };

  return (
    <CodeEditorContext.Provider value={{ codeValue, updateCodeValue }}>
      {children}
    </CodeEditorContext.Provider>
  );
};

export const useCodeEditor = () => {
  return useContext(CodeEditorContext);
};
