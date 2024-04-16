const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/Medihelp_user")

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true,
        unique: true  
    },
    Password: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('User',userSchema);