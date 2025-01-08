import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "./db";
import bcrypt from "bcrypt";
import { z } from "zod";
const JWT_SECRET = "hheks221jjd";

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


app.post("/api/v1/content", (req, res) => {

});

app.get("/api/v1/contents", (req, res) => {

});

app.delete("/api/v1/content", (req, res) => {

});

app.listen(4000, () => {
    console.log(`server is listning on port 4000`);
})