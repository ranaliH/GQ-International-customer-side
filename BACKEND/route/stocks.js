const express = require('express');
const stocks = require('../models/Stock_admin/stocks');
const connectDB = require('../config/db');
const deficits = require('../models/Stock_admin/deficits');
const router = express.Router();
const Items = require('../models/Items');
//const Item = require('../models/Items');

//save stocks
router.post('/stock/save',(req,res)=>{
    let newStock = new stocks(req.body);

    newStock.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Stock saved successfully!"
        });
    });

});

//save items
router.post('/item/save',(req,res)=>{
    let newItem = new Items(req.body);

    newItem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Item saved successfully!"
        });
    });

});
 
//get Stocks
router.get('/stocks',(req,res)=>{
    stocks.find().exec((err,stocks)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStocks:stocks
        });
    });
});

//get items

router.get('/items/get',(req,res)=>{
    Items.find().exec((err,items)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingItems:items
        });
    });
});

//Update stocks
router.put('/stock/update/:id',(req,res)=>{
    stocks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //Whole body should be updated
        },
        (err,stock)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully!"
            });
        }
    );
});


//Update items
router.put('/item/update/:id',(req,res)=>{
    Items.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //Whole body should be updated
        },
        (err,item)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully!"
            });
        }
    );
});

//Delete stock
router.delete('/stock/delete/:id',(req,res)=>{
    stocks.findByIdAndRemove(req.params.id).exec((err,deletedStock)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessful!",err
            });
        }
        return res.status(200).json({
            message:"Delete successful!",deletedStock
        });
    });
});

//Delete item
router.delete('/item/delete/:id',(req,res)=>{
    Items.findByIdAndRemove(req.params.id).exec((err,deletedItem)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessful!",err
            });
        }
        return res.status(200).json({
            message:"Delete successful!",deletedItem
        });
    });
});


//get one stock by Id
router.get('/stock/:id',(req,res)=>{
    let stockId = req.params.id;
    stocks.findById(stockId,(err,stock)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            stock
        });
    });
    });

    //get one item by Id
    
router.get('/item/get/:id',(req,res)=>{
    let itemId = req.params.id;
    Items.findById(itemId,(err,item)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            item
        });
    });
    });


    /****************** Deficits*****************************/

//save deficits
router.post('/deficit/save',(req,res)=>{
    let newDeficit = new deficits(req.body);

    newDeficit.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Deficit saved successfully!"
        });
    });

});

//get Deficits
router.get('/deficits',(req,res)=>{
    deficits.find().exec((err,deficits)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDeficits:deficits
        });
    });
});


//Update deficit
router.put('/deficit/update/:id',(req,res)=>{
    deficits.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //Whole body should be updated
        },
        (err,deficit)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully!"
            });
        }
    );
});

//Delete deficit
router.delete('/deficit/delete/:id',(req,res)=>{
    deficits.findByIdAndRemove(req.params.id).exec((err,deletedDeficit)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessful!",err
            });
        }
        return res.status(200).json({
            message:"Delete successful!",deletedDeficit
        });
    });
});


//get one deficit by Id
router.get('/deficit/:id',(req,res)=>{
    let deficitId = req.params.id;
    deficits.findById(deficitId,(err,deficit)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            deficit
        });
    });
    });

module.exports = router;
