const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordsSchema = new Schema({
   
    randomWord : [
        {
            word : {
                type:String,
                required : true,
                unique : true
            
            }
        }],
   
    // friendIds : Array
})


const Word = mongoose.model('words' , WordsSchema);

module.exports = Word;