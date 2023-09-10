import express from express
import { v2 as cloudinary} from "cloudinary"

import { PostSchema } from "../models/post.model"

export const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

//fonction getAllPosts

router.route("/").get(async(req,res)=> {

})

//function création
router.route("/").post(async(req,res)=> {
    try {
        const {name, prompt, photo} = req.body
        const photoUrl = await cloudinary.uploader.upload(photo)

        const newPost = await PostSchema.create({
            name,
            prompt,
            photo: photoUrl.url,
        })

        res.status(201).json({success: true, data: newPost })
    } catch(err) {
        res.status(500).json({success: false, message: error})
    }
})

