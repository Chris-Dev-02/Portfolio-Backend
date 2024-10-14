import { Schema, model } from "mongoose";

export const ContentBlockSchema = new Schema({
    contentType: {             // This determines whether the content block is text or image
        type: String,
        enum: ['paragraph', 'image'],
        require: true
    },
    content: {
        type: String,    // For paragraphs, this will be the text; for images, this will be the image URL
        require: true
    },
    altText: {
        type: String    // Optional field for images to provide alternative text
    }
},{
    timestamps: true
});

export default model('ContentBlock', ContentBlockSchema);
