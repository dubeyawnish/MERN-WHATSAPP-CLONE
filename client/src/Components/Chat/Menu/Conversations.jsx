import { useEffect,useState,useContext } from "react";
import { getUsers } from "../../../service/api";
import {Box,styled,Divider} from '@mui/material';
import Conversation from "./Conversation";
import { AccountContext } from "../../../Context/AccountProvider";




const Component=styled(Box)`
height:81vh;
overflow:overlay:

`
const StyledDivider=styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
opacity:.6;
`



const Conversations =({text})=>{
    const {account,socket,setActiveUsers}=useContext(AccountContext);
    const[users,setUsers] = useState([]);




    useEffect(()=>{
        const fetchData=async()=>{
          let response= await getUsers();
          let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    },[text]);

    useEffect(()=>{
        socket.current.emit('addUser',account);
        socket.current.on("getUsers",users=>{
        setActiveUsers(users);
        })
    },[account]);


    return (
        <Component>
           
            {
                users.map(user=>(
                    
                    user.sub !== account.sub &&
                    <>
                    <Conversation user={user}/>
                    <StyledDivider />
                    </>
                    
                ))
            }
           
        </Component>
    )
}

export default Conversations;