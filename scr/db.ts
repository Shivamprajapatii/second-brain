import mongoose from "mongoose";

mongoose.connect("mongodb+srv://shivamprajapati4794:Shivam9621@second-brain.sh29h.mongodb.net/Brainly",)

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const ContentSchema = new mongoose.Schema({
    link : String,
});

export const UserModel = mongoose.model("User", UserSchema);

