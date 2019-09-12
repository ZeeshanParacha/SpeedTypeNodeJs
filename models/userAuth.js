const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthUser = new Schema({
   
    
            name : {
                type:String,
                required : true,
                unique : true
            
            }
        
   
    // friendIds : Array
})


const User = mongoose.model('AuthUsers' , AuthUser);

module.exports = User;