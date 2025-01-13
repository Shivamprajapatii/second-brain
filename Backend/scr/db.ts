import mongoose, { Mongoose } from "mongoose";
import { string } from "zod";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL as string;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const ContentSchema = new mongoose.Schema({
    title : { type : String, required : true, unique: true },
    link : { type : String, required : true },
    tags : [{ type: mongoose.Types.ObjectId, ref:"Tag" }],
    userId : { type: mongoose.Types.ObjectId, ref : "User", required : true }
});

const LinkShcema = new mongoose.Schema({
  hash : { type: String },
  userId : { type : mongoose.Types.ObjectId, ref:"User", required:true }
});

export const UserModel = mongoose.model("User", UserSchema);
export const ContenModel = mongoose.model("Content", ContentSchema);
export const LinkModel = mongoose.model("Link", LinkShcema);




