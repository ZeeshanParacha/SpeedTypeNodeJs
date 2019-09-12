
const mongoose = require("mongoose");

// connection URI
const mongoURI = "mongodb+srv://zeeshan:zeeshan123@cluster0-712i3.mongodb.net/SpeedType?retryWrites=true&w=majority"

// remove deprecation warning of collection.ensureIndex
mongoose.set('useCreateIndex', true);

// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose;