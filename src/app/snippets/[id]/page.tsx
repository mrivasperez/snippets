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

  return <div>{snippet.title}</div>;
};

export default ShowSnippetPage;
