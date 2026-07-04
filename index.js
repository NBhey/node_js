const http = require("node:http");

const IP = "127.0.0.1";
const PORT = 5000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  const url = request.url;
  console.log(url);
  response.setHeader("Content-Type", "text/plain");

  response.end("hello");
});

server.listen(PORT, IP, () => {
  console.log(
    "Сервер запущен и слушает " + PORT + " порт",
    `http://${IP}:${PORT}`,
  );
});
