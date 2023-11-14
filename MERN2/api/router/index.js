import express from "express"
import User from './user.js'
import Chat from './Chats.js'

const router=express.Router()

router.use("/user",User)
router.use("/chat",Chat)



export default router