import { deleteSnippet } from "@/actions";
import Code from "@/components/Code";
import { db } from "@/db";
import Link from "next/link";
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

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-3xl">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            <i className="bi bi-pencil-square me-2"></i>Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">
              <i className="bi bi-trash me-2"></i>Delete
            </button>
          </form>
        </div>
      </div>
      <Code code={snippet.code} />
    </div>
  );
};

export default ShowSnippetPage;
