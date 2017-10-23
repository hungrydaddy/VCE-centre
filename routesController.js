// by Austin Huang

const express = require("express");
const router = express.Router();

// serving files from the folder
router.use("/assets", express.static(__dirname + "/assets"));

// serving the index page
router.get("/", function(req, res) {
    res.render(__dirname + "/html/en_au/index.html");
});
router.get("/cn/", function(req, res) {
    res.render(__dirname + "/html/zh_cn/index.html");
});


// course category page
router.get("/course-category", function(req, res) {
    res.render(__dirname + "/html/en_au/course-category.html");
});
router.get("/course-category/cn", function(req, res) {
    res.render(__dirname + "/html/zh_cn/course-category.html");
});


// subject detail page
router.get("/subject-detail", function(req, res) {
    res.render(__dirname + "/html/en_au/subject-detail.html");
});
router.get("/subject-detail/cn", function(req, res) {
    res.render(__dirname + "/html/zh_cn/subject-detail.html");
});





// exporting the module
module.exports = router;
