const express=require("express");
const admincontroller=require("../contollers/admin-controller");
const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware =require("../middlewares/admin-middleware");

const router=express.Router();

router.route("/users")
      .get(authMiddleware,admincontroller.getAllUsers);

router.route("/users/:id")
      .get(authMiddleware,admincontroller.getUserById);

router.route("/users/update/:id")
      .patch(authMiddleware,adminMiddleware,admincontroller.UpdateUserById);

router.route("/users/delete/:id")
      .delete(authMiddleware,admincontroller.deleteUserById);

router.route("/contacts")
      .get(authMiddleware,admincontroller.getAllContacts);

router.route("/contacts/delete/:id")
      .delete(authMiddleware,admincontroller.deleteContactById);


module.exports=router;