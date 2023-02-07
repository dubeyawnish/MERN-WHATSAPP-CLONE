


import {Box,styled} from '@mui/material';
import { AccountContext } from '../../../Context/AccountProvider'
import { useContext } from 'react'
import {Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';



const Component=styled(Box)`
height:44px;
background:#ededed;
padding : 8px 16px;
display:flex;
align-items:center;
`;
const Wrappr =styled(Box)`
margin-left:auto; 
 &>*{
    margin-left:2px;
    padding:8px;
    color:#000;

 } ;
 & : first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
 }
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
            <Wrappr>
                <MessageIcon />
                <HeaderMenu />
            </Wrappr>
          </Component>


        </>
    )
 }


 export default Header;