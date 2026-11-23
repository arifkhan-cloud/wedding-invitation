import { readFile, writeFile } from "node:fs/promises";

const publicUrl = process.argv[2];
if (!publicUrl || !publicUrl.startsWith("https://")) {
  throw new Error("Pass the deployed HTTPS site URL as the first argument.");
}

const indexPath = new URL("../dist/index.html", import.meta.url);
let html = await readFile(indexPath, "utf8");
const imageUrl = new URL("og-invitation.jpg", publicUrl).href;
html = html
  .replace('<meta property="og:image" content="og-invitation.jpg" />', `<meta property="og:image" content="${imageUrl}" />`)
  .replace('<meta name="twitter:image" content="og-invitation.jpg" />', `<meta name="twitter:image" content="${imageUrl}" />`);
if (!html.includes('property="og:url"')) {
  html = html.replace("</head>", `    <meta property="og:url" content="${publicUrl}" />\n  </head>`);
}
await writeFile(indexPath, html);
