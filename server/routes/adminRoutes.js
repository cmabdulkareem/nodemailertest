import express from "express";
import { handleSendOtp, handleRegister } from "../controller/adminController.js";


const router = express.Router()

router.post("/sendotp", handleSendOtp)

router.post('/register', handleRegister)

export default router;