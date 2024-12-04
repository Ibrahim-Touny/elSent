const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    trim: true,
  },
  image: {
    type: [Object], // Allow for multiple images
    default: [], // Default to an empty array
  },
  category: {
    type: String,
    required: [true, "Please add a category"],
    default: "All",
  },
  startingBid: {
    type: Number,
    required: [true, "Please add a starting bid amount"], // Represents the initial bid value
  },
  price: {
    type: Number, // Tracks the current highest bid
    default: function () {
      return this.startingBid; // Default to `startingBid`
    },
  },
  height: { type: Number },
  lengthPic: { type: Number },
  width: { type: Number },
  materialUsed: { type: String },
  weight: { type: Number },
  isSoldout: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
