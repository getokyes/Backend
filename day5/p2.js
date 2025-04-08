const express =require('express');

const app=express();
app.use(express.json());
let users=[
    {id:1,name:'john doe',age:30},
    {id:2,name:'jane doe',age:35}, 
    {id:3,name:'alice doe',age:20},
];
app.get('/users',(req,res)=>{
   res.json(users);


});
app.post('/users',(req,res)=>{
    const {newUsers,password}=req.body;
    console.log(`User ${username} and password ${password} received`)
    res.json({message: "data received"});
});
app.listen(9000,()=>{
    console.log('server is runnig on port 9000');
});