const { Timestamp } = require("bson"); //imports timestamp from bson library
const mongoose = require("mongoose"); //import mongoose for mangodb
const bcrypt = require("bcryptjs"); //import mongoose for mangodb

const userSchema = mongoose.Schema({ //Defines a schema for a user in MongoDB.
    name: {
        type: String,
        require: [true, "Please add a Name."]
    },
    email: {
        type: String,
        require: [true, "Please add an Email."]
    },
    photo:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/128/236/236832.png",
    },
    password: {
        type: String,
        require: [true, "Please add a Password."],
        minLength: [8, "Password must be 8 characters"]
    },
    role: {
        type: String,
        enum: ["admin", "buyer"],
        default:"buyer"
    }
    },
    {timestamps: true}// enables automatic createdAt and updatedAt fields
)

userSchema.pre("save", async function (next){
    if (!this.isModified("password")){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
})

const User = mongoose.model("User", userSchema) //Creates a Mongoose model based on the defined schema. allows interaction with the MongoDB users collection.
module.exports = User; //exports User model
