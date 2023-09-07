const express = require("express")
require("dotenv").config({path: "./config/.env"})
const cors = require("cors")
const { connectDB } = require("./mongoDB/connect")

const app = express()
app.use(cors)
app.use(express.json({ limit: "50mb"}))

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