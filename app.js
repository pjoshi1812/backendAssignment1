const express = require("express");
const bodyParser = require("body-parser");
const taskRoute = require('./routes')
const app = express();
const taskValidate = require('./validate')
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json());
app.use(taskValidate)

app.get('/',(req,res)=>{
    console.log("server strated");
    res.send({message:"To-Do System !"});
});

app.use('/tasks',taskRoute)
app.listen(3000,()=>{
    console.log("Server Listening 3000");
})