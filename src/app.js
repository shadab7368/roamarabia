const express = require("express")
const app= express();
const hbs = require("hbs");
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");


const routes = require('./routes/main')
const Detail = require("./models/Detail")
// /static/css/StyleSheet.css ka matlab yeh ki public folder use ki jgha par static use krna hai 
app.use('/static',express.static("public"))

app.use('/',routes)



// template engine set 
// importent line 
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//-----------------------------------*//
//db connectionss
//  mongoose.connect("mongodb://localhost/website_tut",()=>{
//      console.log("db connected")
//  })
 mongoose.connect('mongodb://127.0.0.1:27017/website_tut');
if(mongoose.connection.on){
console.log("db connected")
}else{
    console.log("db not connected")
}
// Detail.create({
//     brandIconUrl:"/static/images/roam.png",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//           label:"Services",
//           url:"/services"  
//         },
//         {
//           label:"Gallery",
//           url:"/gallery"  
//         },
//         {
//           label:"About",
//           url:"/about"  
//         },
//         {
//           label:"Contact Us",
//           url:"/contact-us"  
//         },
        
//     ]

// })
   
app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Start")
})
