const fs = require('fs');
const img = fs.readFileSync('public/logo-black.jpg');
const b64 = img.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <clipPath id="circleClip">
    <circle cx="50" cy="50" r="50" />
  </clipPath>
  <circle cx="50" cy="50" r="50" fill="white" />
  <image href="data:image/jpeg;base64,${b64}" x="10" y="10" width="80" height="80" clip-path="url(#circleClip)"/>
</svg>`;
fs.writeFileSync('public/favicon-padded.svg', svg);
