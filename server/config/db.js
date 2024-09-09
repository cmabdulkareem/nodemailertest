import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/freshst")
.then(()=>{
console.log("connected to db");
})
.catch((err)=>{
    console.error(err)
})