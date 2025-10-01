import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required:[true,"Address is required"]
    }
})

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;

