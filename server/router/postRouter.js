const express = require("express");
const router = express.Router();
// const POSTS = require("../model/postModel");
const {create_posts,get_all_posts} = require('../controler/postsControler')

// create posts route
router.post("/create",create_posts);

// get all posts route

router.get("/allPosts",get_all_posts)

module.exports = router;
