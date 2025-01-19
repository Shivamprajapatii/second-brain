import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];

    try {
        const decoded = jwt.verify(header as string, JWT_SECRET as string);
        // @ts-ignore
        if (decoded) {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        } else {
            res.status(403).json({
                message: "You are not logged In"
            })
        }
    } catch(error) {
        res.status(404).json({ message: "Error found", error});
    }

}