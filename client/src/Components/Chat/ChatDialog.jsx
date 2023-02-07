import { Dialog } from "@mui/material";
import Menu from './Menu/Menu';
import EmptyChat from "./chat/EmptyChat";
import {Box,styled ,Typography} from '@mui/material'


const Component=styled(Box)`
display:flex;
`
const LeftComponent=styled(Box)`
 min-width:450px;
`
const RightComponent= styled(Box)`
widht:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0 ,0.14);
`

const dialogStyle={
   height:'96%',
   margin:'20px',
   width:'100%',
   borderRadius:0,
   maxWidth:'100%',
   maxHeight:'100%',
   boxShadow:'none',
   overflow:'hidden'
}

const  ChatDialog =()=>{
 return(
   <Dialog
            open={true}
            PaperProps={{sx:dialogStyle}}
            hideBackdrop={true}
            maxWidth={'md'}
   >
  <Component>
       <LeftComponent>
        <Menu />
       </LeftComponent>
       <RightComponent>
         <EmptyChat />
       </RightComponent>

  </Component>
      
   </Dialog>
 )
}


export default ChatDialog;