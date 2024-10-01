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
    <div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl">Snippets</h1>
        <Link href={"/snippets/new"} className="border p-2 rounded">
          New
        </Link>
      </div>

      <div className="flex gap-2 flex-col">{renderedSnippets}</div>
    </div>
  );
};

export default Home;
