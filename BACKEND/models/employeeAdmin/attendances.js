const mongoose = require('mongoose');

const EASchema = new mongoose.Schema({
    FullName :{
        type :String,
        required:true
    },
    Emp_ID :{
        type :String,
        required:true
    },
    Date :{
        type:String,
        required:true
    },
    Days :{
        type:String,
        required:true
    },
    Time_IN :{
        type:String,
        required:true
    },
    Time_OUT :{
        type:String,
        required:true
    }
})

const EmployeeAttendance = mongoose.model('EmployeeAttendance',EASchema);
module.exports = EmployeeAttendance;