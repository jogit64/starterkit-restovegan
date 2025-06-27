// api/plat-du-jour.ts

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { NOTION_API_KEY, NOTION_DB_ID } = process.env;
  if (!NOTION_API_KEY || !NOTION_DB_ID) {
    return res
      .status(500)
      .json({ error: "Missing NOTION_API_KEY or NOTION_DB_ID" });
  }

  try {
    const notionRes = await fetch(
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

    if (!notionRes.ok) {
      throw new Error(`Notion responded ${notionRes.status}`);
    }

    const data = await notionRes.json();
    return res.status(200).json(data);
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: "Notion request failed", detail: err.message });
  }
}
