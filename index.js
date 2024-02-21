// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const express = require('express');
const mongoose = require('mongoose');
const app= express();
const port=3000;

//middleware
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://0.0.0.0:27017/user-database').then((req,res)=>{console.log('mongodb connected!');});

// designing Schema
const Users = mongoose.model('Users',{email:String , password:String});



app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/submit", function(req,res){
    res.sendFile(__dirname + "/submit.html");
});

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/register.html");
});

app.post("/register",function(req,res){
    const emails = req.body.email;
    const passwords = req.body.password;

    const user = new Users({email:emails , password:passwords});
    user.save().then(()=>{console.log('user saved')});
})

app.listen(3000,function(req,res){ //server running
    console.log(`server up and running on port`);
});