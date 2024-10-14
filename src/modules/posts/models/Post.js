import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
//import { ContentBlockSchema as ContentBlockSchema } from "./ContentBlock.js";

const PostSchema = new Schema({
    title:{
        type: String
    },
    thumbnail:{                         // This saves the url of thumbnail image
        type: String
    },
    postType: {                         // This determines whether the post is a project or a blog
        type: String,
        enum: ['blog', 'project'],
        require: true
    },
    publicationStatus: {                   // This determines whether post is published or a draft
        type: String,
        enum: ['draft', 'published'],
        require: true
    },
    publicationDate:{
        type: Date
    },
    //content:[PostContentBlockSchema], // Array with all content blocks asociated to this project
    content:[{                          // Array with all content blocks asociated to this project
        ref: "ContentBlock",
        type: Schema.Types.ObjectId,
    }],
},{
    timestamps: true
});

PostSchema.plugin(mongoosePaginate)

export default model('Post', PostSchema);
