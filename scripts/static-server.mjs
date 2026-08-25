// Minimal static file server for the exported site in `out/`.
// Used by `npm start` because `next start` does not work with
// `output: 'export'`. No dependencies, respects the PORT env var.
import { createServer } from "node:http";
import { existsSync, statSync, createReadStream } from "node:fs";
import { join, extname, normalize } from "node:path";

const OUT_DIR = join(process.cwd(), "out");
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

function resolveFile(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(
    /^(\.\.[/\\])+/,
    ""
  );
  const candidates = [
    join(OUT_DIR, clean, "index.html"), // /en/ -> out/en/index.html
    join(OUT_DIR, clean), // /sitemap.xml -> out/sitemap.xml
    join(OUT_DIR, `${clean}.html`), // /en -> out/en.html
    join(OUT_DIR, clean, "index"), // route handlers (extensionless)
  ];
  return candidates.find((p) => existsSync(p) && statSync(p).isFile());
}

createServer((req, res) => {
  const file = resolveFile(req.url ?? "/");
  if (!file) {
    const notFound = join(OUT_DIR, "404.html");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    if (existsSync(notFound)) createReadStream(notFound).pipe(res);
    else res.end("404 Not Found");
    return;
  }
  res.writeHead(200, { "Content-Type": MIME[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`Serving out/ on http://localhost:${PORT}`);
});
