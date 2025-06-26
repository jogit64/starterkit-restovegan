// api/plat-du-jour.ts
export default async function handler(req: any, res: any) {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const DATABASE_ID = process.env.NOTION_DB_ID;

  if (!NOTION_API_KEY || !DATABASE_ID) {
    return res.status(500).json({ error: "Missing env variables" });
  }

  try {
    const result = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({
          page_size: 1,
          sorts: [{ property: "Date", direction: "descending" }],
        }),
      }
    );

    const data = await result.json();
    return res.status(200).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Notion request failed", detail: err });
  }
}
