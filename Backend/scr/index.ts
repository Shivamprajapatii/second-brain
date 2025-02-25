import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import { ContenModel, LinkModel, UserModel } from "./db";
import bcrypt from "bcrypt";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';
import { userMiddleware } from "./middleware";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;


app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/api/v1/signup", async (req, res) => {
    const signupSchema = z.object({
        username: z.string().min(3, "Username must be at least 3 characters long"),
        password: z.string().min(5, "Password must be at least 3 characters long"),
    });
    const { username, password } = signupSchema.parse(req.body);

    try {

        const existingUser = await UserModel.findOne({ username });

        //@ts-ignore
        if (existingUser) {
            res.status(403).json({ message: "User already exist" });
            return;
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUSer = await UserModel.create({
            username,
            password: hashPassword
        });

        
        const token = jwt.sign({
            //@ts-ignore
            id: newUSer._id,
        }, JWT_SECRET);


        res.json({
            message: "User Signed Up",
            token
        });
    } catch (error) {
        res.status(411).json({ message: "user already exist" });
    }

});

//@ts-ignore
app.get("/api/v1/check-username/:username", async (req, res) => {
    const username = req.params.username;

    const existingUser = await UserModel.findOne({
        username
    });

    if (existingUser) {
        return res.json({ exists: true });
    } else {
        return res.json({ exists: false });
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

            res.status(200).json({
                message : "User Signin successfully",
                token
            });

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
    const { type, link, title } = req.body;

    try {
        await ContenModel.create({
            type,
            link,
            title,
            tags: [],
            //@ts-ignore
            userId: req.userId
        });
    
        res.status(400).json({
            message: "Cnotent added Successfully"
        });
    } catch (error) {
        res.status(404).json({ message: "feild to add!" });
    }

});

app.get("/api/v1/contents", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;

    try {
        const contentData = await ContenModel.find({ userId }).populate("userId");
        if (!contentData) {
            res.send({ message: "data not found" });
        } else {
            res.json(contentData);
        }

    } catch (error) {
        console.log(error);
    }
});

//@ts-ignore
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const { contentId } = req.body;

    try {
        const deletedContent = await ContenModel.findOneAndDelete({
            _id : contentId,
            //@ts-ignore
            userId: req.userId
        });
        
        if(!deletedContent){
           return res.json({ 
                message: "Content not found or unauthorized" 
            });
        };
    
        return res.json({ message: "Content Deleted Successfully!" });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting content" });
    }   
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;

    try {
        if (share) {
            const existingLink = await LinkModel.findOne({
                //@ts-ignore
                userId: req.userId,
            });
            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                });
                return
            };
    
            const hash = uuidv4()
            await LinkModel.create({
                // @ts-ignore
                userId: req.userId,
                hash : hash
            });
            res.json({
                message: "/share/" + hash
            });
    
        } else {
            await LinkModel.deleteOne({
                // @ts-ignore
                userId: req.userId,
            });
    
            res.json({
                message: "Remove Share link",
                share
            });
        };
    } catch (error) {
        res.status(4000).json({message:"Eroor occur during share the brain link"})
    }

});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    
    try {
        const link = await LinkModel.findOne({
            hash: hash
        });
        if (!link) {
            res.status(411).json({
                message: "sorry incorrect url"
            });
            return;
        };
    
        const content = await ContenModel.find({
            userId: link.userId
        });
    
        const user = await UserModel.findOne({
            _id: link.userId
        });
        
        if (!user) {
            res.status(411).json({
                message: "user not found, error should ideally not happed"
            });
            return
        };

        res.json({
            //@ts-ignore
            username: user.username,
            content: content
        });
    } catch (error) {
        res.status(4000).json({message:"Eroor occur during share the brain link"})
    }
});

const PORT = process.env.PORT || 4000;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error("Failed to start server:", error);
}
