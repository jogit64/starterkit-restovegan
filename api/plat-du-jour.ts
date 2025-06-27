// api/plat-du-jour.ts
export async function GET() {
  const { NOTION_API_KEY, NOTION_DB_ID } = process.env;
  if (!NOTION_API_KEY || !NOTION_DB_ID) {
    return new Response(
      JSON.stringify({ error: "Variables d'environnement manquantes" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({ page_size: 1 }),
      }
    );
    if (!res.ok) throw new Error(`Statut Notion ${res.status}`);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: "Échec de la requête Notion",
        detail: err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
