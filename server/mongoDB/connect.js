const mongoose = require("mongoose")

export const connectDB = async(url) => {
    //StricQuery est un paramètre qui servira plus tard dans la recherche
    mongoose.set("strictQuery", true)

    mongoose.connect(url)
        .then(()=> console.log("mongoDB est connectée"))
        .catch((err)=> console.log(err))
}
