const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScore = new Schema({
   
    
            name : String , 
            score : String
        
   
    
})


const Score = mongoose.model('Scores' , userScore);

module.exports = Score;