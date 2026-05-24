const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const { URL } = require("url");

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.join(__dirname, "public");

function sendText(response, statusCode, text, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(text),
    "Content-Type": contentType,
  });
  response.end(text);
}

function getMimeType(filePath) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

function isInsidePublicDir(filePath) {
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

async function serveFile(response, filePath) {
  const stats = await fsp.stat(filePath);
  response.writeHead(200, {
    "Content-Length": stats.size,
    "Content-Type": getMimeType(filePath),
  });

  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath);
    stream.on("error", reject);
    response.on("close", resolve);
    stream.pipe(response);
  });
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);
    const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
    const filePath = path.resolve(PUBLIC_DIR, `.${requestedPath}`);

    if (!isInsidePublicDir(filePath)) {
      sendText(response, 400, "Invalid asset path.");
      return;
    }

    await serveFile(response, filePath);
  } catch (error) {
    const statusCode = error && error.code === "ENOENT" ? 404 : 500;
    sendText(response, statusCode, statusCode === 404 ? "Not found." : `Server error: ${error.message}`);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Quiz Combo Desk running at http://${HOST}:${PORT}`);
});
