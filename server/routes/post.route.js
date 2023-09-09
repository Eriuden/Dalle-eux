import express from express
import { v2 as cloudinary} from "cloudinary"

import { PostSchema } from "../models/post.model"

const router = express.Router()

export default router