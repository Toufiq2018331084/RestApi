import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users=[];

router.get('/', (req,res)=> {
    res.send(users);
});

router.post('/',(req,res)=>{
    users.push({...req.body, id: uuidv4()});
    res.send("added hopefully");
});

router.get('/:id',(req,res)=>{
    const {id} =req.params;
    const foundUser = users.find((user)=> user.id ===id);
    res.send(foundUser);
    
});

export default router;