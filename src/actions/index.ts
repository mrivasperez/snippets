"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  const title = formData.get("title");
  const code = formData.get("code");

  // validate input
  if (!title || typeof title !== "string")
    return { message: "Title is invalid." };
  if (title.length < 3) {
    return { message: "Title must be longer." };
  }
  if (!code || typeof code !== "string") return { message: "Code is invalid." };
  if (code.length < 10) return { message: "Code must be longer." };

  // create new db record
  await db.snippet.create({
    data: { title, code }
  });

  redirect("/");
};

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code }
  });

  return redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });

  return redirect("/");
};
