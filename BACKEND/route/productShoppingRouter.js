const express = require("express");
const Posts = require("../models/shoppingProduct");

const shoppingRouter = express.Router();

shoppingRouter.get('/shopping',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

shoppingRouter.get("/cartpost/:id",(req,res)=>{
    let postId = req.params.id;
 
    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
 
        return res.status(200).json({
            success:true,
            post
        });
    });
 })

 shoppingRouter.put('/cartpost/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
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

shoppingRouter.delete('/cartpost/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Deleted UN Successfully",err
        });

        return res.json({
            message:"Delete Successfully",deletedPost
        });
    });
});


module.exports = shoppingRouter;