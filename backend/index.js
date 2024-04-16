const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const UserModel = require('./UserSchema');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.json());


const access_token_secret = "heyhello" ;



const port  = 3000;


app.get('/',(req,res)=>{
    res.send('Hello backend is on')
})

app.post('/signin', async (req,res)=>{
    const { name, username, password } = req.body;
    console.log(name , username , password);
    if (!name || !username || !password) {
        return res.status(400).send({ message: 'All fields are required' });
    }

        const hashedPassword = await bcrypt.hash(password, 8); 
        const newUser = new UserModel(
            { 
                Name:name, 
                Username: username, 
                Password: hashedPassword 
            }
        );
        await newUser.save();
        console.log('Data is saved');
        //write your json token login here

        
        res.status(201).send({ message: 'User created successfully' });

      

})



const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server is working');
})
