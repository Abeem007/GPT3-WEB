
export default async function handler(req, res) {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { query, topic = "technology", lang = "en", max = 5 } = req.query;
    const API_KEY = process.env.VITE_GNEWS_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const baseUrl = "https://gnews.io/api/v4/search";
    const searchQuery =
      query ||
      "artificial intelligence OR machine learning OR generative AI OR OpenAI";

    const url = `${baseUrl}?q=${encodeURIComponent(searchQuery)}&topic=${topic}&lang=${lang}&max=${max}&token=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    const data = await response.json();

  
    const filteredArticles = (data.articles || [])
      .filter(
        (article) =>
          article.title &&
          (article.title.toLowerCase().includes("ai") ||
            article.title.toLowerCase().includes("artificial") ||
            article.title.toLowerCase().includes("machine learning") ||
            article.title.toLowerCase().includes("gpt") ||
            article.title.toLowerCase().includes("openai")),
      )
      .slice(0, 5);

    return res.status(200).json({ articles: filteredArticles });
  } catch (error) {
    console.error("GNews API proxy error:", error);
    return res.status(500).json({
      error: "Failed to fetch articles",
      message: error.message,
    });
  }
}
