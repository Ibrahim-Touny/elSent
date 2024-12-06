const asyncHandler = require("express-async-handler"); //Handles errors in asynchronous Express routes.
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

const registerUser = asyncHandler(async (req,res) => { //function to handle the /register route.
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please Fill in all required fields!");
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("Email already exists!");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    const token = generateToken(user.id);
    res.cookie("token", token,{
        path:"/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //One day
        sameSite: "none",
        secure: true,
    });

    if(user){
        const {_id, name, email, role} = user;
        res.status(201).json ({_id, name, email, role});
    } else {
        res.status(400);
        throw new Error("Invalid user Data!");
    }

});

const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error ("Please add email and password!");
    }
    const user = await User.findOne({ email });
    if (!user){
        res.status(404);
        throw new Error ("User not found, Please signup!");
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    const token = generateToken(user._id);
    res.cookie("token", token,{
        path:"/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //One day
        sameSite: "none",
        secure: true,
    });

    if(user && passwordIsCorrect){
        const {_id, name, email, role} = user;
        res.status(201).json ({_id, name, email, role});
    } else {
        res.status(400);
        throw new Error("Invalid user Data!");
    }
});

const loginStatus = asyncHandler (async (req, res) => {
    const token = req.cookies.token;
    if (!token){
        return res.json(false);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(verified){
        return res.json(true);
    }
    return res.json(false);
});

const logoutuser = asyncHandler (async (req, res) => {
    
    res.cookie("token", "",{
        path:"/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true,
    });
    return res.status(200).json({message: "Successfully logged out!"});
});

  const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
  
    res.status(200).json(user);
  });

  const getAllUser = asyncHandler(async (req, res) => {
    const userList = await User.find({});
  
    if (!userList.length) {
      return res.status(404).json({ message: "No user found" });
    }
  
    res.status(200).json(userList);
  });


module.exports = { 
    registerUser,
    loginUser,
    loginStatus,
    logoutuser,
    getUser,
    getAllUser };
