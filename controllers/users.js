import {v4 as uuidv4} from 'uuid';

let users=[];

export const getAllUsers = (req,res)=>{
    res.send(users);
}

export const createUser = (req,res)=>{
    users.push({...req.body, id: uuidv4()});
    res.send("added hopefully");
}

export const getUser =(req,res)=>{
    const {id} =req.params;
    const foundUser = users.find((user)=> user.id ===id);
    res.send(foundUser);    
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!=id);
    res.send(users);
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id===id);
    const {firstName, lastName, age} = req.body;
    if(firstName)user.firstName=firstName;
    if(lastName)user.lastName=lastName;
    if(age)user.age=age;
    res.send(users);
}