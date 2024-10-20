import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/michael", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/michael", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/michael", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log(`The server is up on port ${port}`)
});