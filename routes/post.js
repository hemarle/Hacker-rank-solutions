const express = require("express");
const router = express.Router();

const authors = require(".././model/db");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {}
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
