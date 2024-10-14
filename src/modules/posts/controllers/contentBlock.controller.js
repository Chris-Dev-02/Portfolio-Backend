import ContentBlock from "../models/ContentBlock.js";
import Posts from "../models/Post.js";

export const controller = {};

controller.getContentBlocksList = async (req, res) => {
    try{
        const contentBlock = await ContentBlock.find({});
        res.status(200).json(contentBlock);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.getContentBlock = async (req, res) => {
    try{
        const {id} = req.params;
        const contentBlock = await ContentBlock.findById(id);
        if (!contentBlock) {
            return res.status(404).json({ error: 'Content Block not found.' });
        }
        res.status(200).json(contentBlock);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.addContentBlock = async (req, res) => {
    try{
        const { postId } = req.params;
        const parentPost = await Posts.findById(postId);

        if(!parentPost){
            return res.status(404).json({message: "The parent post wasn't found, please enter a valid post"});
        }

        const {type, content, altText} = req.body;
        const newContentBlock = new ContentBlock({
            type,
            content,
            altText
        });
        await newContentBlock.save();

        parentPost.content.push(newContentBlock._id);
        await parentPost.save();

        res.status(200).json({newPost: newContentBlock});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.updateContentBlock = async (req, res) => {
    try{
        const {id} = req.params;
        const contentBlock = await ContentBlock.findByIdAndUpdate(id, req.body);

        if(!contentBlock){
            return res.status(404).json({message: "Content Block not found"});
        }

        const updatedPost = await ContentBlock.findById(id);
        res.status(200).json(updatedPost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.deleteContentBlock = async (req, res) => {
    try{
        const {id} = req.params;
        const contentBlock = await ContentBlock.findByIdAndDelete(id);

        if(!contentBlock){
            return res.status(404).json({message: "Content Block not found"});
        }

        res.status(200).json({message: "Post deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

controller.getContentBlockTypes = async(req, res) => {
    try{
        const enumTypes = ContentBlock.schema.path('contentType').enumValues;
        res.status(200).json({message: enumTypes});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};
