import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1><a href='/about'>About me</a><a href='/contact'>Contact me</a>");
    // console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><a href='/'>Link Home</a>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact Me</h1><a href='/'>Link Home</a>");
});

app.listen(port, ()=>{
    console.log(`The server is up on port ${port}`)
});