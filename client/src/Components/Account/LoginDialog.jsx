import {Dialog,List,Box,ListItem,styled, Typography} from '@mui/material';
import {GoogleLogin} from '@react-oauth/google';


// components
import { qrCodeImage } from '../../Constants/data';


const Container= styled(Box)`
padding: 56px 0 56px 56px;
`;

const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})

const Title= styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`
const StyleList = styled(List)`
& >li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
}
`

const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}
const Component=styled(Box)`
 display:flex;
`



 const LoginDialog = ()=>{

 const onLoginError =()=>{

 }
  
 const onLoginSuccess =()=>{

 }


    return(
        <Dialog  
            open={true}
            PaperProps={{sx:dialogStyle}}
        >
                <Component>
                            <Container>
                                 <Title>To use whatsapp on your computer:</Title>
                                 <StyleList>
                                    <StyleList>1. Open whatsapp on your phone</StyleList>
                                    <StyleList>2. Tap Menu Setting and select whatsapp web</StyleList>
                                    <StyleList>3. Point your phone to this screen to capture the code</StyleList>
                                 </StyleList>
                            </Container>

                            <Box style={{position:'relative'}}>
                                <QRCode src={qrCodeImage} alt="QRcode" />
                                <Box style={{position:'absolute' ,top:'50%',transform:'translate(25%)'}}>
                                    <GoogleLogin 
                                      onSuccess={onLoginSuccess}
                                      onError={onLoginError}
                                      />
                                </Box>
                            </Box>
                </Component>

        </Dialog>
    )
 }

 export default LoginDialog;