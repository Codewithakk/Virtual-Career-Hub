const Users=require("../models/user-model");
const Contacts=require("../models/contact-models");
const User = require("../models/user-model");
//const { default: Contact } = require("../../client/src/Contact");

const getAllUsers=async(req,res,next)=>{
    try{
      const users=await Users.find({},{password:0});
      console.log(users);
      if(!users || users.length===0){
        return res.status(404).json({message:'No user found'});
        
      }
      return res.status(200).json(users);
    }catch(error){
        next(error);
    }
};

//single user logic

const getUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await Users.findOne({_id:id},{password:0});
        return res.status(200).json( data); 
    } catch (error) {
        next(error);
    }
}

const UpdateUserById=async(req,res)=>{
try{
      const id=req.params.id;
      const updatedUserData=req.body;

      const updatedData=await User.updateOne(
        {_id:id},
        {
            $set:updatedUserData,
        }
      );
      return res.status(201).json(updatedData);
    }
catch(error){
    next(error);
}};
//AdminUser Delete logic
const deleteUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        await Users.deleteOne({_id:id});
        return res.status(200).json( { message : "User has been deleted" }); 
    } catch (error) {
        next(error);
    }
}

//getAllContacts Route
const getAllContacts=async(req,res)=>{
    try {
        const contacts=await Contacts.find();
        console.log(contacts);
        if(!contacts || contacts.length===0){
            return res.status(404).json({message: 'No contact Found'});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

//Delete contact by id
const deleteContactById=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contacts.deleteOne({_id:id});
        return res.status(200).json( { message : "Contact has been deleted" }); 
    } catch (error) {
        next(error);
    }
}

module.exports={getAllUsers,getAllContacts,deleteUserById,getUserById,UpdateUserById,deleteContactById,deleteContactById};