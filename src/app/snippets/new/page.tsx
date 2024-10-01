"use client";

import { createSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { useFormState } from "react-dom";

const CreateSnippetPage = () => {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  const [code, setCode] = useState("");

  const handleEditorChange = (value: string = "") => setCode(value);

  return (
    <form action={action}>
      <div className="flex justify-between items-center my-4">
        <input
          name="title"
          className="border rounded p-2 w-full me-5"
          id="title"
          placeholder="Title"
        />
        <button
          type="submit"
          className=" rounded p-2 bg-blue-600 text-white font-bold"
        >
          Save
        </button>
      </div>
      {formState.message ? (
        <div className="my-4 mb-6 p-2 bg-red-50 rounded border border-red-500 text-red-800 font-bold shadow">
          {formState.message}
        </div>
      ) : null}

      <div className="rounded overflow-hidden">
        <Editor
          height="50vh"
          language="javascript"
          theme="vs-dark"
          defaultValue={code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </div>
    </form>
  );
};

export default CreateSnippetPage;
