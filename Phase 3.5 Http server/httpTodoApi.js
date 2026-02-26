import http from "http";

let todos = [];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    // Get /todos

    if(method === "GET" && url === "/todos"){
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(todos));
    }

    // Post /todos
    else if (method === "Post" && url === "/todos"){
        let body = "";
        req.on("data", chunk => body += chunk)

        req.on("end", ()=> {
            const { title } = JSON.parse(body);

            const todo = {
                id: Date.now(),
                title, 
                completed: false
            }

            todos.push(todo);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(todo));
        })
    }else{
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running");
})