import express from 'express';
import { addUser,getUsers } from '../Controller/user-controller.js'
import { newConversation } from '../Controller/conversation-controller.js';


const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation)
export default route;