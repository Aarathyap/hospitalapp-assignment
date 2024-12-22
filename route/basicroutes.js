const express=require('express');
const { title } = require('process');
const router=express.Router();
router.use(express.json());  //express.json is a builtin middleware
router.use(express.urlencoded({extended:true}));//for files and images

// router.get('/',(req,res)=>{
//     res.send(data)
// })






module.exports = router;