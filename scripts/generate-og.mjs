import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fdfbf7"/>
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#111111" stroke-width="8"/>

  <circle cx="150" cy="120" r="26" fill="#863bff"/>
  <rect x="1040" y="90" width="70" height="70" fill="#fde047" stroke="#111" stroke-width="6"/>
  <rect x="1020" y="500" width="60" height="60" fill="#86efac" stroke="#111" stroke-width="6"/>

  <g font-family="Arial, Helvetica, sans-serif">
    <rect x="120" y="100" width="250" height="8" fill="#111111"/>
    <rect x="830" y="100" width="250" height="8" fill="#111111"/>

    <text x="120" y="180" font-size="56" font-weight="bold" fill="#111111">Jasa Pembuatan Website</text>
    <text x="120" y="250" font-size="40" fill="#111111">Profesional &amp; Murah</text>

    <rect x="120" y="320" width="500" height="112" fill="#111111"/>
    <text x="148" y="392" font-size="50" font-weight="bold" fill="#fdfbf7">Muhammad Syafi'i</text>
    <text x="148" y="418" font-size="26" fill="#fde047">Fullstack Web Developer</text>

    <text x="120" y="480" font-size="30" fill="#111111">React &#183; Laravel &#183; MySQL</text>
    <text x="120" y="530" font-size="36" font-weight="bold" fill="#111111">programmergabut.id</text>

    <rect x="840" y="300" width="230" height="230" fill="#fca5a5" stroke="#111" stroke-width="6" rx="16"/>
    <text x="868" y="460" font-size="26" font-weight="bold" fill="#111111">Juara LKS</text>
    <text x="868" y="498" font-size="26" font-weight="bold" fill="#111111">Web Technology</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg), { density: 200 })
  .resize(1200, 630)
  .png()
  .toFile(import.meta.dirname + "/../public/og.png");

console.log("og.png generated");