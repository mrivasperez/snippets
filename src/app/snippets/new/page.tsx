import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippetPage = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    // validate input
    const title = formData.get("title") as string; // TODO improve checking
    const code = formData.get("code") as string; // TODO improve checking

    // create new db record
    const newSnippet = await db.snippet.create({
      data: { title, code }
    });

    console.log(newSnippet); // TODO

    redirect("/");
  };

  return (
    <form action={createSnippet}>
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

        <button type="submit" className=" rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippetPage;
