// Client → HTTP request → Node HTTP Server → Your code → HTTP response

// Basic HTTP Server

// Manual Routing

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    const data = { message: "Todos fetched" };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else if (method === "GET" && url === "/todos") {
    res.end("List Todos");
  } else {
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
