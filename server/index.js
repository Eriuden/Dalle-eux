const express = require("express")
require("dotenv").config({path: "./config/.env"})
const cors = require("cors")
const { connectDB } = require("./mongoDB/connect")
import postRoutes from "./routes/post.route"
import dalleRoutes from "./routes/dalle.route"

const app = express()
app.use(cors)
app.use(express.json({ limit: "50mb"}))

app.use("/api/post", postRoutes)
app.use("/api/dalle", dalleRoutes)

app.get("/", async (req,res) => {
    res.send("Salut les gens")
})

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8000, () => console.log ("Ca marche"))
    } catch (err) {
        console.log(err)
    }  
}

startServer()