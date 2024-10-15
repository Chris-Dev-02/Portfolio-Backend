import { Schema, model } from "mongoose";

const EmailSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Email', EmailSchema);