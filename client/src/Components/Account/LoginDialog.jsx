import {Dialog,List,Box,ListItem,styled, Typography} from '@mui/material';



// components
import { qrCodeImage } from '../../Constants/data';




const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'none'
}



 const LoginDialog = ()=>{
    return(
        <Dialog  
            open={true}
            PaperProps={{sx:dialogStyle}}
        >
                <Box>
                            <Box>
                                 <Typography>To use whatsapp on your computer:</Typography>
                                 <List>
                                    <ListItem>1. Open whatsapp on your phone</ListItem>
                                    <ListItem>2. Tap Menu Setting and select whatsapp web</ListItem>
                                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                                 </List>
                            </Box>

                            <Box>
                                <img src={qrCodeImage} alt="QRcode" />
                            </Box>
                </Box>

        </Dialog>
    )
 }

 export default LoginDialog;