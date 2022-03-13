const router = require("express").Router();
const productShopping = require("../models/shoppingProduct");

router.route("/Cartadd").post((req,res)=>{

    const itemCode = req.body.itemCode;
    const description = req.body. description;
    const unitPrice = Number(req.body.unitPrice);
    //const color = req.body. color;
    const qty = req.body.qty;
    const total = req.body.total;
   

    const newproductShopping = new productShopping({

        itemCode,
        description,
        unitPrice,
        qty,
        total

    })

    newproductShopping.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })

}) 

module.exports = router;