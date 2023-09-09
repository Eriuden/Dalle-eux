import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {
            String,
            required:true
          },

    prompt: {
             String,
             required:true
            },

    photo: {
            String,
            required:true
           },
})

export const PostSchema = mongoose.model("Post", Post)