import mongoose from "mongoose";
import dotenv from 'dotenv';

mongoose.set('strictQuery', false);


dotenv.config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${username}:${password}@whatsappclone.l5t0wss.mongodb.net/?retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully ');
  }
  catch (error) {
    console.log('Error while connectin with the database', error.message);
  }
}
export default Connection;