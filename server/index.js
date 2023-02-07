import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';




const PORT=8000 || process.env.PORT;

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Route);

 
app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));
Connection();