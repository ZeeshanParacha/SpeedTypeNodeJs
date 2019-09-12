const express = require('express');
const router = express.Router();
const Score = require('../models/score')





//Get all Users
//http://localhost:3000/randomwords/getAllwords
router.get('/AllScores' , (req , res) => {
    
    const scores = Score.find();

     
        scores.then((AllScore) => {
        res.send({result: AllScore})
    }).catch(e => {
        res.send({message : e.message})
    })
})


// Save data to Database
router.post('/AddUserScore', (req, res) => {
    const score = req.body;
    const newScore = new Score(score)
    newScore.save().then(() => {
        res.send({ message: 'User Score Added' })
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message })
    })
    console.log("score--->", score)
})


module.exports = router;