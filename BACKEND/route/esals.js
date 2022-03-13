const express = require('express');
const Esals = require('../models/employeeAdmin/esals');
const router = express.Router();

//save Salary

router.post('/esal/save',(req,res)=>{
    let newSal = new Esals(req.body);

    //save
    newSal.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:"Salary Saved Successfully"
        });

    });
});

//get salary

router.get('/esals',(req,res)=>{
    Esals.find().exec((err,esals)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEsals:esals
        });
    });
});

//get spesific salary

router.get("/esal/:id",(req,res)=>{
    let esalId = req.params.id;

    Esals.findById(esalId,(err,esal)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            esal
        });
    });
})


//update salary

router.put('/esal/update/:id',(req,res)=>{
    Esals.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,esal)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Salary Updated Successfully"

            });

        }

    );
});


//delete

router.delete('/esal/delete/:id',(req,res)=>{
    Esals.findByIdAndRemove(req.params.id).exec((err,deletedEsal) =>{
        if(err) return res.status(400).json({
            message:"Deleted UN Successfully",err
        });

        return res.json({
            message:"Delete Successfully",deletedEsal
        });
    });
});

module.exports = router;