const express = require('express');
const router = express.Router();
const Words = require('../models/user')





//Get all Users
//http://localhost:3000/randomwords/getAllwords
router.get('/getAllwords' , (req , res) => {
    
    const randomWords = Words.aggregate(  [ 
        { "$unwind": "$randomWord" }, //decontruct array
        { "$sample": { "size": 15 } }  // randomly pick 15 items from 30 items
    ] );

     
        randomWords.then((Allusers) => {
        res.send({result: Allusers})
    }).catch(e => {
        res.send({message : e.message})
    })
})


// Save data to Database
router.post('/add', (req, res) => {
    const user = req.body;
    const newUser = new Users(user)
    newUser.save().then(() => {
        res.send({ message: 'Random Data Added !!!' })
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message })
    })
    console.log("User--->", user)
})


module.exports = router;