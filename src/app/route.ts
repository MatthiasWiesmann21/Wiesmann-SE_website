import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

// Static HTML redirect from `/` to the default locale. Emitted as
// out/index.html, and works without JavaScript (meta refresh).
export function GET() {
  const target = "/en/";
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <link rel="canonical" href="${siteConfig.domain}${target}" />
    <title>${siteConfig.name}</title>
  </head>
  <body>
    <p>Redirecting to <a href="${target}">${target}</a>…</p>
  </body>
</html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
