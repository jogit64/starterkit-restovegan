// api/plat-du-jour.cjs

/**
 * Handler CommonJS pour Vercel Node.js
 */
module.exports = async function (req, res) {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_API_KEY || !NOTION_DB_ID) {
    console.error("❌ Clés manquantes :", { NOTION_API_KEY, NOTION_DB_ID });
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
      throw new Error(`Notion API responded ${notionRes.status}`);
    }

    const data = await notionRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("❌ Notion request failed:", err);
    return res
      .status(500)
      .json({ error: "Notion request failed", detail: err.message });
  }
};
