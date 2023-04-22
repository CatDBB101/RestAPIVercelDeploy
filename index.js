const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    console.log("Have request",req.url);
    res.send("COMPLETE DEPLOY")
});

app.get("/about" , (req , res) => {
    console.log("Have request",req.url);
    res.send("THIS PROJECT MADE FROM CATDBB101 IN GITHUB https://github.com/CatDBB101/RestAPIVercelDeploy")
});

const PORT = 4000;
app.listen(PORT , () => {
    console.log("API LISTENING",PORT);
})

module.exports = app;