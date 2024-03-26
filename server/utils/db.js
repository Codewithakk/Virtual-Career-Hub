const mongoose=require("mongoose");
const URI=`mongodb+srv://Akshaysingh:eJJC8MxIija0NFPG@projectsofakshay.zlw2xbe.mongodb.net/placement_cell?retryWrites=true&w=majority`;

//"mongodb://127.0.0.1:27017";


const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit with error code 1
    }
};


module.exports=connectDb;