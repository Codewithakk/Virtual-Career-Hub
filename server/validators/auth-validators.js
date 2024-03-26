const {z} = require("zod");

const loginSchema=z.object({
   
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Please enter a valid Email address"})
    .min(3,{message:"email must be at least of 3 chartacters"})
    .max(255,{message:"email must not be more then 255 characters"}),

    password:z
    .string({required_error:"password is required"})
    .min(7,{message:"password must be at least of 6 chartacters"})
    .max(1024,{message:"password must not be more then 1024 characters"}),
})

//creating an object schema
const  signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 chartacters"})
    .max(255,{message:"Name must not be more then 255 characters"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least of 10 chartacters"})
    .max(20,{message:"Phone must not be more then 20 characters"}),
    
});

module.exports={signupSchema,loginSchema};