import { Request, Response, NextFunction } from "express";
import jwt  from "jsonwebtoken";

export const protectRoute = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Yetkisiz erişim: Token yok' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Yetkisiz erişim: Geçersiz token' });
    }
};