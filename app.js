//created and written by Austin Huang,


const express = require("express");
const routesController = require("./routesController.js");
const app = express();

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);


// delegating the router
app.use("/", routesController);

app.listen(3000, function() {
    console.log("VCE-centre website running on port 3000.");
});
