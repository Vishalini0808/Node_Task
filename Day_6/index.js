import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors());
app.use(express.json());

app.use("/api/data", dataRoutes);

app.listen(PORT,()=>{
    console.log(`server running succesfully on port http://localhost:${PORT}`);
    
})