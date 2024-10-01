"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import React from "react";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  return (
    <div>
      <Editor
        height="40vh"
        language="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default EditSnippetForm;
