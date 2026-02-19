import express from "express"

const app = express();
const PORT = 3000;

// route 
app.get('/', (req, res) => {
    res.send("Hello from express");
});

app.listen(PORT, ()=>{
    console.log(`Server runnig on port ${PORT}`);
});


