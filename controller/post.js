import post from "../model/postModel.js";


export const allposts = async(req, res) => {
    try {
        const allPosts = await post.find();
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const addPost = async(req, res) => {
    const postbody = req.body;
    res.status(200).json({message:'successful'})
    const newPost = new post(postbody);
    try {
        await newPost.save()
    } catch (error) {
        res.status(409).json({message:error.message})
    }
    // if(!user)
    // res.send('New Registration made')
}