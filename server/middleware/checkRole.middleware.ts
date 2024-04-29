import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import {ExpressRequestInterface} from "./auth.middleware";
import {verifyToken} from "../utils/verifyToken.utils";

@Injectable()
export class CheckRoleMiddleware implements NestMiddleware {
    async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next()
            return
        }

        const decoded = verifyToken(req);
        if (!decoded) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        console.log(decoded)
        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Forbidden' })
        }

        req.user = decoded.user
        next()
    }
}