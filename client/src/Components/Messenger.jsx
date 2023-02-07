import { Box,AppBar, Toolbar, styled } from '@mui/material';



// Components
import LoginDialog from "./Account/LoginDialog";
import ChatDialog from './Chat/ChatDialog';

const Component=styled(Box)`
height:100vh;
background:#DCDCDC; 
`


 const Header= styled(AppBar)`
 height:220px;
 background-color:#00bfa5;
 box-shadow:none;
 
 `

const Messenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>

            <LoginDialog />

        </Component>
    );
}


export default Messenger;