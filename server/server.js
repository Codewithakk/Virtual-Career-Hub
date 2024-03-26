// require("dotenv").config();
// const express=require("express");
// const cors=require("cors");
// const app=express();
// const authRoute=require("./router/auth-router");
// const contactRoute=require("./router/contact-router");
// const adminRoute=require("./router/admin-router");
// //const jobportal=require("./router/jobportal");
// const connectDb=require("./utils/db");
// const errorMiddleware=require("./middlewares/error-middleware");

// const corsOptions ={
//    origin:"http://localhost:5173",
//    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
//    credential:true,
// };
// app.use(cors(corsOptions));

// app.use(express.json());

// //Routes
// app.use("/api/auth",authRoute);
// app.use("/api/form",contactRoute);
// //app.use('/api/jobs',jobportal);
// app.use("/api/admin",adminRoute);
// //app.use("/api/company",jobportal);

// app.use(errorMiddleware);
// const Port=5000;
// app.get("/",async(req,res)=>{
//     res.send("<h1>Hello World!</h1>");
// });
// app.get("/register",async(req,res)=>{
//     res.status('200').send("Welcome to Registration page");
// });
// app.get("/login",async(req,res)=>{
//     res.status('200').send("Welcome to login page");
// });
// connectDb().then(()=>
// {
// app.listen(Port,()=>{
//     console.log(`server is running at port: ${Port}`);
//    });
// });

// app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const adminRoute = require('./router/admin-router');
const jobPortalRoute = require('./router/jobportal'); // Import the Job Portal router
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const eventRoutes = require('./router/eventRoutes');
const resume=require('./router/resumeRouter')
const teamMembersRoutes = require('./router/admin/team_member');
const analyticsRoutes = require('./router/admin/analyticsRoutes');
const studentRoutes=require('./router/students')
// const expressLayouts = require('express-ejs-layouts');
// const routes = require('./router');
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};

// app.set('view engine', 'ejs');
// app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/company', jobPortalRoute); // Use the Job Portal router
app.use('/api/admin', adminRoute);
app.use('/api', eventRoutes);
app.use('/api',resume);
app.use('/api', teamMembersRoutes);
app.use('/api/analytics', analyticsRoutes)
app.use('/api/student', studentRoutes)


app.use(errorMiddleware);

const Port = 5000;
app.get('/', async (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/register', async (req, res) => {
  res.status(200).send('Welcome to Registration page');
});

app.get('/login', async (req, res) => {
  res.status(200).send('Welcome to login page');
});



connectDb().then(() => {
  app.listen(Port, () => {
    console.log(`Server is running at port: ${Port}`);
  });
});

// "react-feather": "^2.0.9",
// "react-scripts": "5.0.0",
// "react-to-print": "^2.14.4",
// "@testing-library/jest-dom": "^5.16.1",
//     "@testing-library/react": "^12.1.2",
//     "@testing-library/user-event": "^13.5.0",
//     "web-vitals": "^2.1.4",