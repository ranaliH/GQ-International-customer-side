const express = require('express');
const Attendances = require('../models/employeeAdmin/attendances');

const router = express.Router();

//Add Attendances

router.post('/attendance/save',(req,res)=>{
    let newAtt = new Attendances(req.body);

    //save
    newAtt.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:"Attendance Saved Successfully"
        });

    });
});


//get Attendances

router.get('/attendances',(req,res)=>{
    Attendances.find().exec((err,attendances)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAttendances:attendances
        });
    });
});

//get a spesific attendance
router.get("/attendance/:id",(req,res)=>{
    let attendancesId = req.params.id;

    Attendances.findById(attendancesId,(err,attendance)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            attendance
        });
    });
});



//update Attendance

router.put('/attendance/update/:id',(req,res)=>{
    Attendances.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,attendance)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully"

            });

        }

    );
});
module.exports = router;