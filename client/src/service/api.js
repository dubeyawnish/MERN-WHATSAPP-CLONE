import axios from 'axios'



const url='http://localhost:8000';

export const addUser =async(data)=>{
    try{
        await axios.post(`${url}/add`,data);

    }
    catch(error){
        console.log("Error while addUser api " ,error.message);
    }
}


export const getUsers=async()=>{
    try{
       let response=await axios.get(`${url}/users`);
       console.log(response);
       return response.data;   // main data present in response.data and many more thins like config etc..but not use of it
    }
    catch(error){
        console.log('Error while calling the getusers api',error.message);

    }
}

export const setConversation =async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);

    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}