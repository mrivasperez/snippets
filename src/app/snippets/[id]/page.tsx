import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface ShowSnippetPageProps {
  params: { id: string };
}

const ShowSnippetPage = async (props: ShowSnippetPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (!snippet) return notFound();

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-3xl">{snippet.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-2 border rounded bg-gray-50 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ShowSnippetPage;
