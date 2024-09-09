import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import {corsOptions} from './config/corsOptions.js'
import session from "express-session";
import {sessionConfig} from "./config/sessionConfig.js"
import "./config/db.js"
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";


configDotenv()
const app = express()
const PORT = process.env.PORT
  
app.use(session(sessionConfig));
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))


app.use("/", userRoutes)
app.use("/admin", adminRoutes)

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})