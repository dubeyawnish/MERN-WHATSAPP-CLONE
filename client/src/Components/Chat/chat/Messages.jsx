import { Box, Typography, styled } from '@mui/material';
import { useContext, useEffect, useState,useRef } from 'react';
import { AccountContext } from '../../../Context/AccountProvider'
import { getMessages, newMessage } from '../../../service/api';

import Footer from './Footer';
import Message from './Message';


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container=styled(Box)`
 padding :1px 80px;
`


const Messages = ({ person, conversation }) => {
    const[messages,setMessages]=useState([]);
    const [value, setValue] = useState('');
    const { account } = useContext(AccountContext);
    const [image,setImage]=useState('');
    const scrollRef=useRef();
    const[newMessageFlag ,setNewMessageFlag]=useState(false);
    const [file,setFile]=useState();
    //console.log(conversation._id);



    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            //console.log(data);
            setMessages(data);
        }
        getMessageDetails();
    }, [person._id,conversation._id,newMessageFlag ]);
    useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'});

    },[]);


    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if (code === 13) {
            let message={};
            if(!file){
             message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value,
            
            }
        }
        else{
             message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'file',
                text: image,
            
            }

        }
            await newMessage(message);
            setValue('');
            setFile('');
            
            setNewMessageFlag(prev=>!prev);
        
        }

    }
    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message =>(
                        <Container ref={scrollRef}>
                             <Message message={message} />
                        </Container>
                        
                    ))
                }

            </Component>
            <Footer sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;