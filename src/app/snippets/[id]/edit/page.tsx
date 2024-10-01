import EditSnippetForm from "@/components/EditSnippetForm";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface EditSnippetPageProps {
  params: { id: string };
}

const EditSnippetPage = async (props: EditSnippetPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({ where: { id } });

  if (!snippet) return notFound();
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippetPage;
