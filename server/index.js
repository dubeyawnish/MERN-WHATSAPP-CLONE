import express from 'express';
import Connection from './database/db.js';



const app=express();
const PORT=8000 || process.env.PORT;
 
app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));
Connection();