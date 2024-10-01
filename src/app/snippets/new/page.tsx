"use client";

import { createSnippet } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const CreateSnippetPage = () => {
  const [formState, action] = useFormState(createSnippet, { message: "" });

  return (
    <form action={action}>
      <h3 className="font-bold my-10">Create a Code Snippet</h3>
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
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-50 rounded border border-red-500 text-red-800 font-bold">
            {formState.message}
          </div>
        ) : null}
        <button type="submit" className=" rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippetPage;
