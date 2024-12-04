const mongoose=require("mongoose");
const biddingSchema=mongoose.Schema();

const biddingproduct=mongoose.model("User",biddingProductSchema);
module.exports=biddingproduct;