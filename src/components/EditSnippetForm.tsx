"use client";

import { Snippet } from "@prisma/client";
import React from "react";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  return <div>EditSnippetForm</div>;
};

export default EditSnippetForm;
