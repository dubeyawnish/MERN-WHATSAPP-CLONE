


import {Box,styled} from '@mui/material';
import { AccountContext } from '../../../Context/AccountProvider'
import { useContext } from 'react'
import {Chat as MessageIcon,Morevert} from '@mui/icons-material';



const Component=styled(Box)`
height:44px;
background:#ededed;
padding : 8px 16px;

`
const Image=styled('img')({

height:40,
width:40,
borderRadius:'50px',
})






 const Header=()=>{
    const {account} =useContext(AccountContext);
    return(
        <>
          <Component>
            <Image src={account.picture} alt="dp" />
            <Box>
                <MessageIcon />
                <Morevert />
            </Box>
          </Component>


        </>
    )
 }


 export default Header;