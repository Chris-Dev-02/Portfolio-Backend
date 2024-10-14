import Post from "../models/Post.js";

export const controller = {};

const paginationOptions = {
    page: 1,
    limit: 10
};

controller.getPostsList = async (req, res) => {
    try{
        const posts = await Post.paginate({}, paginationOptions);
        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.getPost = async (req, res) => {
    try{
        const {id} = req.params;
        const post = await Post.findById(id).populate('content').exec();
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.addPost = async (req, res) => {
    try{
        const {title, thumbnail, postType, publicationStatus, publicationDate, content} = req.body;
        const newPost = new Post({
            title,
            thumbnail,
            postType,
            publicationStatus,
            publicationDate,
            content
        });
        await newPost.save()
        res.status(200).json({newPost});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.updatePost = async (req, res) => {
    try{
        const {id} = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body);

        if(!post){
            return res.status(404).json({message: "Project not found"});
        }

        const updatedPost = await Post.findById(id);
        res.status(200).json(updatedPost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.deletePost  =async (req, res) => {
    try{
        const {id} = req.params;
        const post = await Post.findByIdAndDelete(id);

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        res.status(200).json({message: "Post deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.getPostTypes = async(req, res) => {
    try{
        const postTypes = Post.schema.path('postType').enumValues;
        res.status(200).json({message: postTypes});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.getPublishedStates = async(req, res) => {
    try{
        const publishedStates = Post.schema.path('publishedState').enumValues;
        res.status(200).json({message: publishedStates});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};