

import { Box } from '@mui/system'
import Conversations from './Conversations';
import Header from './Header'
import Search from './Search';





const Menu =()=>{

   
    return (
        <Box>
            <Header />
            <Search />
            <Conversations />
        </Box>
    )
}

export default Menu;