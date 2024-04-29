import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export interface JwtResponseInterface extends jwt.JwtPayload {
    id: number;
}

export const verifyToken = (req: Request): JwtResponseInterface | null => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return null

    try {
        return jwt.verify(token, process.env.PRIVATE_KEY) as JwtResponseInterface;
    } catch (e) {
        return null
    }
}
