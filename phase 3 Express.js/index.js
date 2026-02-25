import express from "express"

const app = express();
const PORT = 3000;

// parse the json from client side because express cannot autmatically read json
app.use(express.json());

// route 
app.get('/', (req, res) => {
    res.send("Hello from express");
});

app.post('/echo', (req, res) =>{
    res.json({
        recieved: req.body
    })
})

app.listen(PORT, ()=>{
    console.log(`Server runnig on port ${PORT}`);
});


