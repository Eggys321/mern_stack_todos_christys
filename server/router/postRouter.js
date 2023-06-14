const express = require("express");
const router = express.Router();
// const POSTS = require("../model/postModel");
const {create_posts,get_all_posts,get_specific_post,delete_post,update_post} = require('../controler/postsControler')

// create posts route
router.post("/create",create_posts);

// get all posts route

router.get("/allPosts",get_all_posts);
// get specific post
router.get('/specific/:postId',get_specific_post)
// delete post
router.delete('/delete/:postId',delete_post)
// update post
router.patch('/update/:postId',update_post)


module.exports = router;
