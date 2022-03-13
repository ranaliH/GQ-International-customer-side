const express = require('express');
const OnlinePay = require('../models/onlinePay');

const router = express.Router();

//Adding new Employees

router.post('/pay/save',(req,res)=>{
    let newPay = new OnlinePay(req.body);

    //save
    newPay.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
           success:"Payment Added Successfully"
        });

    });
});


module.exports = router;