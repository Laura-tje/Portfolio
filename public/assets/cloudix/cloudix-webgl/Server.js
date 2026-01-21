
const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const port = 8000;

// Enable compression
app.use(compression());

// Serve static files from current folder
const buildPath = __dirname; // gebruik huidige map
app.use(express.static(buildPath, {
  extensions: ['html']
}));

// Middleware voor .unityweb headers (Brotli of gzip)
app.use((req, res, next) => {
  if (req.url.endsWith(".unityweb")) {
    res.setHeader("Content-Encoding", "br"); // of "gzip" als je gzip hebt
    res.setHeader("Content-Type", "application/octet-stream");
  }
  next();
});

// Fallback voor SPA: alle andere routes naar index.html
app.use((req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Unity WebGL running at http://127.0.0.1:${port}`);
});



