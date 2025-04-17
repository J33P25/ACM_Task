const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User')
const Message = require('./models/Contactmessage');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/EdenTrekUsers")


app.post("/login", (req, res) => {
    const {username, password} = req.body
    userModel.findOne({username: username})
    .then(user => {
        if(user){
            if (user.password === password){
                res.json("Success!")
            }
            else{
                res.json("Incorrect Password!")
            }
        } else{
            res.json("User Not Found!")
        }
    })
})

app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/contact', (req, res) => {
    Message.create(req.body)
        .then(result => res.json({ success: true, message: "Message sent successfully!" }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
});

app.listen(3001, () => {
    console.log("Server is running...");
})