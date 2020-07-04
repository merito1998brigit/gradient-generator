const express = require('express');
const app =express();
const croc=require('cors')
const connectDB = require('./config/Database');
const path= require('path');
//connect database
//NPM_CONFIG_PRODUCTION=false npm install --prefix gradiant-app && npm run build --prefix gradiant-app
connectDB();
//middleware
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials",'true');
    res.header("Access-Control-Allow-Methods",' GET, PUT,POST,DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers",'Origin, Content-Type, Accept');
    next();
});
app.use(require("./routes/api/gradient"))
if(process.env.NODE_ENV =="production"){
    app.use(express.static("gradiant-app/build"));
    app.get("*",(res,req)=>{
        res.sendFile(path.resolve(__dirname,"gradiant-app","build", "index.html"));
    })
}

const PORT = process.env.PORT || 8080;


//Use this after the variable declaration

app.listen(PORT, ()=> console.log(`Server started at: ${PORT}`))
