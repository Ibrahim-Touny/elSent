//to start open terminal -> cd backend -> npm start


const dotenv = require("dotenv").config(); //Loads .env variables to process.env
const express = require("express"); // A web framework for creating APIs and web applications.
const mongoose = require("mongoose"); //library for interacting with MongoDB
const cors = require("cors"); //Middleware to handle Cross-Origin Resource Sharing, allowing frontend applications hosted on different domains to interact with your backend.
const cookieParser = require("cookie-parser"); //Middleware to parse cookies in HTTP requests.
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const biddingRoute = require("./routes/biddingRoute"); //Imports user-related routes from the userRoute.js file.
const errorHandler = require("./middleware/errorMiddleWare"); //Imports middleware error handler from errorMiddleWare.js file.
const app = express();//Create Instance from express
const path=require("path");
const bodyParser=require("body-parser");
const categoryRoute = require("./routes/categoryRoute");
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS Configuration  Configures which origins can access your API
app.use(
    cors({
        origin: ["http://localhost:5173"], // Allow only requests from the frontend's localhost
        credentials: true, // Allows cookies to be sent with requests
    })
);

const PORT = process.env.PORT || 5000; //Sets the port number for the server and Uses the PORT variable from the .env file if defined; otherwise, defaults to 5000.


app.use("/api/users", userRoute); //Registers the userRoute
app.use("/api/product", productRoute);
app.use("/api/bidding", biddingRoute);
app.use("/api/category", categoryRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(errorHandler) //Dont know what is the error here :)

// Basic Route, (Home Page)
app.get("/", (req, res) => {
    res.send("Home Page");
});

// MongoDB Connection
mongoose.connect(process.env.DB_CLoud)
.then(() => { //after Connecting with mongodb start the server and listens for requests
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
})
.catch((err) => { //error handling if mongodb failed
    console.error("MongoDB connection error:", err);
});
