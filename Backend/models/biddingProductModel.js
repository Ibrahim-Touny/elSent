const mongoose = require("mongoose");

const BiddingProductSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, // Corrected typo
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, // Corrected typo
      ref: "Product",
    },
    price: {
      type: Number,
      required: [true, "Please add a Price"], // Corrected typo
      min: [0, "Price must be a positive number"], // Optional: Prevent negative prices
    },
  },
  { timestamps: true }
);

const BiddingProduct = mongoose.model("BiddingProduct", BiddingProductSchema);
module.exports = BiddingProduct;
