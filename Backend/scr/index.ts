import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ContenModel, UserModel } from "./db";
import bcrypt from "bcrypt";
import { z } from "zod";

import { userMiddleware } from "./middleware";

import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;


app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    const signupSchema = z.object({
        username: z.string().min(3, "Username must be at least 3 characters long"),
        password: z.string().min(5, "Password must be at least 8 characters long"),
    });

    const { username, password } = signupSchema.parse(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const data = await UserModel.create({
            username,
            password: hashPassword
        });

        res.json({
            message: "User Signed Up"
        });
    } catch (error) {
        res.status(411).json({ message: "user already exist" });
    }

});

    app.post("/api/v1/signin", async (req, res) => {
        const signinSchema = z.object({
            username: z.string().min(3, "Username must be at least 3 characters long"),
            password: z.string().min(5, "Password must be at least 8 characters long"),
        });

        const { username, password } = signinSchema.parse(req.body);

        try {
            const existingUser = await UserModel.findOne({
                username: username,
            });

            if (!existingUser) {
                res.status(403).json({ message: "User not exist" });
                return;
            }

            const passMatch = await bcrypt.compare(password, existingUser.password);

            if (passMatch) {
                const token = jwt.sign({
                    id: existingUser._id,
                }, JWT_SECRET);

                res.status(200).json(token);

            } else {
                res.status(403).json({
                    message: "incoorect credentials"
                })
            }

        } catch (error) {
            res.status(404).json({ message: "User not found" });
        }

    });


app.post("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const { type, link,  title } = req.body;
    
    await ContenModel.create({
        type,
        link,
        title,
        tags : [],
        //@ts-ignore
        userId : req.userId
    });

    res.json({
        message : "Cnotent added"
    });
    
});

app.get("/api/v1/contents", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;

    try {
        const contentData = await ContenModel.find({ userId }).populate("userId");
        console.log(contentData);
        if(!contentData){
            res.send({message : "data not found"});
        } else {
            res.json(contentData);
        }
      
    } catch (error) {
        console.log(error);
    }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const { contentId } = req.body;
    
    await ContenModel.deleteMany({
        contentId : contentId,
        //@ts-ignore
        userId : req.userId
    });
    res.json({message:"Data Deleted Successfully!"});
});

app.post("/api/v1/brain/share", (req,res) => {

});

app.listen(4000, () => {
    console.log(`server is listning on port 4000`);
})