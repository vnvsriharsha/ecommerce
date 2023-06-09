const exp = require('constants')
const express = require('express')
const { sequelize, User, Post } = require('./models')
const app = express()

app.use(express.json())

app.post('/createUser', async function(req,res){
    const {name,email,age,role} = req.body;
    try{
        const users = await User.create({name,email,age,role});
        res.send(users);
    }catch(err){
        console.log('err', err)
        res.status(500).send({err : 'data creation failer'});
    }
})

app.get('/getUsers', async function(req,res){
    //const {name,email,age,role} = req.body;
    try{
        const users = await User.findAll();
        res.send(users);
    }catch(err){
        console.log('err', err)
        res.status(500).send({err : 'fetch error'});
    }
})

app.listen(5000, async ()=>{
    console.log('server is running on Port:5000');
    // await User.sync({force:true})
    // await Post.sync({force:true})
    await sequelize.authenticate()
})