import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssgOut = resolve(root, "dist-ssg");

const routes = [
  { path: "/", file: "index.html" },
  { path: "/projects", file: "projects/index.html" },
  { path: "/certifications", file: "certifications/index.html" },
];

const outFile = resolve(ssgOut, "ssg.js");
if (!existsSync(dist)) {
  console.error("dist folder not found. Run 'npm run build' first.");
  process.exit(1);
}

console.log("Building SSG bundle...");
await build({
  root,
  logLevel: "error",
  build: {
    ssr: resolve(root, "src/ssg.jsx"),
    outDir: ssgOut,
    emptyOutDir: true,
    minify: false,
  },
});

const ssg = await import(pathToFileURL(outFile).href);
console.log("Rendering routes...");

const pristineHtml = readFileSync(resolve(dist, "index.html"), "utf8");

for (const route of routes) {
  const htmlPath = resolve(dist, route.file);
  const patch = ssg.buildSeoPatch(route.path);

  if (route.file === "index.html") {
    writeFileSync(htmlPath, pristineHtml, "utf8");
  } else {
    mkdirSync(dirname(htmlPath), { recursive: true });
    writeFileSync(htmlPath, pristineHtml, "utf8");
  }

  let html = readFileSync(htmlPath, "utf8");

  html = html.replace("<!--app-html-->", ssg.renderRoute(route.path));

  html = html.replace(/<title>.*?<\/title>/s, `<title>${patch.title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${patch.description}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${patch.url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${patch.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${patch.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${patch.url}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${patch.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${patch.description}" />`
  );

  if (patch.faqJsonLd && !html.includes("<!-- Structured Data: FAQ -->")) {
    const faqTag = `<!-- Structured Data: FAQ -->\n    <script type="application/ld+json">\n    ${patch.faqJsonLd}\n    </script>\n\n    `;
    html = html.replace("<!-- Preconnect to external domains -->", `${faqTag}<!-- Preconnect to external domains -->`);
  }

  mkdirSync(dirname(htmlPath), { recursive: true });
  writeFileSync(htmlPath, html, "utf8");
  console.log(`Prerendered ${route.path} -> ${route.file}`);
}

rmSync(ssgOut, { recursive: true, force: true });
console.log("Prerender selesai.");