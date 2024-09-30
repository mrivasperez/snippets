import { db } from "@/db";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return (
    <div>
      <h1 className="text-3xl">snippets: {snippets.length}</h1>
      {renderedSnippets}
    </div>
  );
};

export default Home;
