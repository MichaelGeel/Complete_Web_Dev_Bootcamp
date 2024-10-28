import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();


app.get("/", (req, res) => {
    const day = new Date();
    const today = day.getDay();
    let outputText = "";
    switch (today){
        case 0:
            outputText = "Hey! It's the weekend, it's time to have fun!";
            break;
        case 1:
            outputText = "Hey! It's a weekday, it's time to work hard!";
            break;
        case 2:
            outputText = "Hey! It's a weekday, it's time to work hard!";
            break;
        case 3:
            outputText = "Hey! It's a weekday, it's time to work hard!";
            break;
        case 4:
            outputText = "Hey! It's a weekday, it's time to work hard!";
            break;
        case 5:
            outputText = "Hey! It's a weekday, it's time to work hard!";
            break;
        case 6:
            outputText = "Hey! It's the weekend, it's time to have fun!";
            break;
    }
    res.render(__dirname + "/views/index.ejs", 
    { content: outputText });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});