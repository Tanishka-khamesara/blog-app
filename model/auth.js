const mongoose = require("mongoose");

const authdata = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require: true,
        unique:true,
    },
    password: {
        type: String,
        require:true,
    },
    
}, {
    timestamps:true,
})

const passwordModel = mongoose.model("passwordModel", authdata);
module.exports = passwordModel;