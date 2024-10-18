import {writeFile, createWriteStream} from "node:fs";
import {input} from "@inquirer/prompts";
import {image} from "qr-image";


const urlInput = await input({message: "Enter the URL to generate a QR Code for: "});
let qr_svg = image(urlInput, {type: "png"});
qr_svg.pipe(createWriteStream("qr_img.png"));

writeFile("URL.txt", urlInput, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});