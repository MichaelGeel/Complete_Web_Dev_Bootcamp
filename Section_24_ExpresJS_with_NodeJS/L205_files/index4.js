import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended: true }));

app.use(morgan("common"));

function bandNameGenerator(req, res, next){
  bandName = req.body["stress"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>You band name is: <h1>\n${bandName}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
