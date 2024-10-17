const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Michael.js!", function(err){
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

//let content = "fd";

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    //content = data;
    console.log(data);
});

//console.log(content);
//console.log("The file has run");