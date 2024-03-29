"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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
  const [codeValue, setCodeValue] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedCodeValue = localStorage.getItem("codeValue");
      return storedCodeValue ? storedCodeValue : "";
    } else {
      return "";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("codeValue", codeValue);
    }
  }, [codeValue]);

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
