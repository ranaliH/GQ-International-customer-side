const mongoose = require('mongoose');

const ESchema = new mongoose.Schema({
    FullName :{
        type :String,
        required:true
    },
    Emp_ID :{
        type:String,
        required:true
    },
    Address :{
        type:String,
        required:true
    },
    Email :{
        type:String,
        required:true
    },
    Phone :{
        type:String,
        required:true
    }
})

const EmployeeDetails = mongoose.model('Employees',ESchema);
module.exports = EmployeeDetails;