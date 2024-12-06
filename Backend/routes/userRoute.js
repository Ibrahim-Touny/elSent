const express = require("express");
const router = express.Router();

const {registerUser, loginUser, loginStatus, logoutuser, getUser, getAllUser} = require("../controllers/userCtr");
const { protect, isAdmin } = require("../middleware/authMiddleWare");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/loggedin", loginStatus);
router.get("/logout", logoutuser);
router.get("/getuser", protect, getUser);
router.get("/users", getAllUser);

module.exports = router;