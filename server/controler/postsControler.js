const POSTS = require("../model/postModel");

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
const get_all_posts = async (req,res)=>{
    const getAllPosts = await POSTS.find()
    try{
        res.json(getAllPosts)
        console.log(getAllPosts);

    }catch(err){
        res.status(404).json({message:err})

    }

}



module.exports = {
    create_posts,
    get_all_posts,
}