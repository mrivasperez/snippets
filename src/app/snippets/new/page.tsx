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
        <h3 className="font text-lg ">New Code Snippet</h3>
        <button
          type="submit"
          className=" rounded p-2 bg-blue-600 text-white font-bold"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <Editor
            height="50vh"
            language="javascript"
            theme="vs-dark"
            defaultValue={code}
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
          />
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-50 rounded border border-red-500 text-red-800 font-bold">
            {formState.message}
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default CreateSnippetPage;
