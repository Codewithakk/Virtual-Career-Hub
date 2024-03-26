const Contact=require("../models/contact-models");

const contactForm=async(req,res)=>{
    try{
        const response=req.body;
        await Contact.create(response);
        return res.status(200).json({mesage:"message send successfully"});

    }catch(error){
        return res.status(500).json({mesage:"message not delivered"});
    }
};

module.exports=contactForm;