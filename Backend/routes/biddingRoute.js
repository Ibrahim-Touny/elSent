
const express = require("express");
const { protect } = require("../middleware/authMiddleware"); // Ensure the user is authenticated
const { getBiddingHistory,placeBid,sellProduct } = require("../controllers/biddingCtr"); // Assuming this controller fetches bidding history
const router = express.Router();

// Apply the protect middleware to ensure the user is authenticated
router.get("/:productId", protect, getBiddingHistory);
router.post("/", protect, placeBid);
router.post("/sell", protect, sellProduct);
module.exports = router;

