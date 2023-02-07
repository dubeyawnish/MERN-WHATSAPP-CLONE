import axois from 'axios'



const url='http://localhost:8000';

export const addUser =async(data)=>{
    try{
        await axois.post(url,data);

    }catch(error){
        console.log("Error while addUser api " ,error.message);
    }
}