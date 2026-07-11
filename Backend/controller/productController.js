const express = require("express");
const instance = require("../RazorPay/razorPay.js");
const crypto = require("crypto");

 module.exports.processPayment = async (req , res)=>{
    const options ={
        amount:Number(req.body.amount*100), // cents 
        currency:"INR"
    }
    const order = await instance.orders.create(options)
    console.log(order)

    res.status(200).json({success:true, order});
}



module.exports.getkey= async (req, res) => {
    res.status(200).json({
        key:process.env.RAZORPAY_KEY_ID
    })
}

module.exports.paymentVerification= async (req ,res) => {
    const {razorpay_payment_id, razorpay_order_id,razorpay_signature} = req.body
    const body=razorpay_order_id + '|' + razorpay_payment_id ;

    const expectedSignature = crypto.createHmac("sha256" , 
        process.env.RAZORPAY_KEY_SECRET).update(body.toString()).digest("hex");

    const isAuthentic =razorpay_signature===expectedSignature
    if(isAuthentic){
        return res.redirect(`http://localhost:5173/paymentStatus?refrence=${razorpay_payment_id}`)
    }
    else{
        res.status(404).json({success:false,message:"payment failed"});
    }
    
}