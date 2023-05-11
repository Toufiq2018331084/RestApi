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

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!=id);
    res.send(users);
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id===id);
    const {firstName, lastName, age} = req.body;
    if(firstName)user.firstName=firstName;
    if(lastName)user.lastName=lastName;
    if(age)user.age=age;
    res.send(users);
});


export default router;