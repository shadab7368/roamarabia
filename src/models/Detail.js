const mongoose = require("mongoose")
const Detail =mongoose.Schema({
    brandIconUrl:String,
    links:[
        {
        label:String,
        url:String,
      
    },
],
});
module.exports= mongoose.model("Detail",Detail)