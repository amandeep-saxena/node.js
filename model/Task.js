const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const TaskSchema = new mongoose.Schema({
    name : { 
        type : String,
        required : [true, "must be provide NAME"],
        trim : true,
        maxlength : [20 , "name  can not be more than 20"]
    },
    completed :{ 
        type : Boolean,
        default : false
    }


})
module.exports = new mongoose.model('TASK', TaskSchema)

