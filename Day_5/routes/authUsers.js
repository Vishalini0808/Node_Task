import express from 'express'
import {authController} from '../controller/authController.js'

const router = express.Router()

router.post("/datas",authController)       // 1stpath , 2nd handler


export default router