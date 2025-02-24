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
        course: {
            type: String,
            required: [true, "Please provide a course"],
        },
        dateOfBirth: {
            type: Date,
            required: [true, "Please provide a date of birth"],
        },
 }, {
     timestamps: true,
 });

 const User = mongoose.model("User", userSchema);   

    export default User;