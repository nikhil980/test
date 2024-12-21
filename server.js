import express from  "express"

const PORT=8888;

const app=express();

app.listen(PORT,(req,res)=>{
    res.json( {message:"Server started"});
})