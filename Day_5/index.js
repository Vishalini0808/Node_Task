import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import authUsers from './routes/authUsers.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000  //process object kulla dha env file irukum

app.use(cors())

app.use(express.json())

app.use("/api/auth",authUsers)       //route mounting podradhunala slash podanum

app.listen(PORT, ()=>{                 
    console.log(`server running successfully http://localhost:${PORT}`);
    
})


// http:localhost:3000/api/auth/datas

//1st import express/ dotenv
//2nd dotenv ah config pannanum
//3rd express ah variable la store pannnum
//4th port acces pannanum
//5th app ah listen pannaum
//6th route and folder file craete pannamum
//7th 