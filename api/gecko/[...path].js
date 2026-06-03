const GECKO_BASE = "https://api.geckoterminal.com/api/v2";

module.exports = async (req, res) => {
  const segments = req.query.path;
  const path = Array.isArray(segments) ? segments.join("/") : segments || "";

  if (!path) {
    res.status(400).json({ error: "Missing GeckoTerminal path" });
    return;
  }

  try {
    const upstream = await fetch(`${GECKO_BASE}/${path}`, {
      headers: { Accept: "application/json" },
    });
    const body = await upstream.text();
    res
      .status(upstream.status)
      .setHeader(
        "Content-Type",
        upstream.headers.get("content-type") || "application/json"
      )
      .setHeader("Cache-Control", "public, max-age=5")
      .send(body);
  } catch {
    res.status(502).json({ error: "Trade feed unavailable" });
  }
};
