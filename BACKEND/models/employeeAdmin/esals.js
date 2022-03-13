const mongoose = require('mongoose');

const SalSchema = new mongoose.Schema({
    FullName :{
        type :String,
        required:true
    },
    Date :{
        type:String,
        required:true
    },
    Work_Hours :{
        type:String,
        required:true
    },
    Hourly_Rate :{
        type:String,
        required:true
    },
    Total_Amount :{
        type:String,
        required:true
    }
})

const EmployeeSalary = mongoose.model('EmployeeSalary',SalSchema);
module.exports = EmployeeSalary;