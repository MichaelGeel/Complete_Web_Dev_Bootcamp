//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

let userAuthorised = false;

function checkPass(req, res, next) {
    const password = req.body['password'];
    if(password=="ILoveProgramming"){
        userAuthorised = true;
    }
    next()
}

app.use(bodyParser.urlencoded( {extended: true }));
app.use(morgan("common"));
app.use(checkPass);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (userAuthorised === true){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        // res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});