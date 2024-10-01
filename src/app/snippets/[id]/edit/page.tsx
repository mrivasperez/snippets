import React from "react";

interface EditSnippetPageProps {
  params: { id: string };
}

const EditSnippetPage = (props: EditSnippetPageProps) => {
  const snippetId = parseInt(props.params.id);
  return <div>EditSnippetPage {snippetId}</div>;
};

export default EditSnippetPage;
