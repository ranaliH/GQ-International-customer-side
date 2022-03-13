const express = require('express');
const Employees = require('../models/employeeAdmin/employees');

const router = express.Router();

//Adding new Employees

router.post('/employee/save',(req,res)=>{
    let newEmployee = new Employees(req.body);

    //save
    newEmployee.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
           success:"Employee Added Successfully"
        });

    });
});
//get a specific post

router.get("/employee/:id",(req,res)=>{
    let employeeId = req.params.id;
 
    Employees.findById(employeeId,(err,employee)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
 
        return res.status(200).json({
            success:true,
            employee
        });
    });
 })

//Get employee Details
router.get('/employees',(req,res)=>{
    Employees.find().exec((err,employees)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployees:employees
        });
    });
});

//updating Employee details

router.put('/employee/update/:id',(req,res)=>{
    Employees.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,employee)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Employee Updated Successfully"

            });

        }

    );
});

//delete employee

router.delete('/employee/delete/:id',(req,res)=>{
    Employees.findByIdAndRemove(req.params.id).exec((err,deletedEmployee) =>{
        if(err) return res.status(400).json({
            message:"Delete UnSuccessfully",err
        });

        return res.json({
            message:"Delete Successfully",deletedEmployee
        });
    });
});
module.exports = router;