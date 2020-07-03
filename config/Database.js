const mongoose = require("mongoose");
const db= "mongodb://localhost/gradients";
const data="mongodb+srv://merito:merito@1998@cluster0.3lzyc.mongodb.net/my_database?retryWrites=true&w=majority"

const connectDB = async () =>{ 
    try {
        await mongoose.connect(data,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
        });
        console.log("mongodb is successfully connected");
    } catch (error) {
        console.log("error: "+error.message);
        process.exit(1);
    }
}

module.exports=connectDB;