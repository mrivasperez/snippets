"use client";

import { Editor } from "@monaco-editor/react";
import React from "react";

interface CodeProps {
  code: string;
}

const Code = ({ code }: CodeProps) => {
  return (
    <Editor
      height="50vh"
      language="javascript"
      theme="vs-dark"
      defaultValue={code}
      options={{ minimap: { enabled: false }, readOnly: true }}
      className="rounded overflow-hidden"
    />
  );
};

export default Code;
