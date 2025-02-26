 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
     name: {
         type: String,
         required: [true, "Please provide a name"],
     },
     email: {
         type: String,
         required: [true, "Please provide an email"],
         unique: true,
     },
     phone: {
         type: String,
         required: [true, "Please provide a phone number"],
     },
 }, {
     timestamps: true,
 });

 const User = mongoose.model("User", userSchema);   

    export default User;