import express from "express"
import handleLogin from '../controllers/user'
const router=express.Router();

router.post('/login',handleLogin);

export default router