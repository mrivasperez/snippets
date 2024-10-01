import { db } from "@/db";
import Link from "next/link";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div className="flex gap-2 flex-col my-4">
      {snippets.length > 0 ? renderedSnippets : "Welcome"}
    </div>
  );
};

export default Home;
