const POSTS = require("../model/postModel");

// creating posts
const create_posts = async (req,res)=>{
  const Posts = new POSTS({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPosts = await Posts.save();
    res.status(200).json(savedPosts);
  } catch (err) {
    res.status(404).json({ message: err });
  }

}
// getting all posts
const get_all_posts = async (req,res)=>{
    const getAllPosts = await POSTS.find()
    try{
        res.json(getAllPosts)
        console.log(getAllPosts);

    }catch(err){
        res.status(404).json({message:err})

    }

}

// getting specific post
const get_specific_post = async(req,res)=>{
  try{
    const specificPost = await POSTS.findById(req.params.postId)
    res.json(specificPost)

  }catch(err){
    res.status(404).json({message:err})

  }

}
// delete  post
const delete_post = async(req,res)=>{
  try{
    // const deletePost = await POSTS.remove({_id:req.params.postId})
    const deletePost = await POSTS.findByIdAndDelete({_id:req.params.postId})   
    res.json(deletePost)
    console.log(deletePost);

  }catch(err){
    res.status(404).json({message:err})

  }

}
// update  post
const update_post = async(req,res)=>{
  try{
    
    const updatePost = await POSTS.updateOne({_id:req.params.postId},{$set:{title:req.body.title,description:req.body.description}})
    // const updatePost = await POSTS.updateOne({_id:req.params.postId},{$set:req.body})

    res.json(updatePost)

  }catch(err){
    res.status(404).json({message:err})

  }

}



module.exports = {
    create_posts,
    get_all_posts,
    get_specific_post,
    delete_post,
    update_post

}