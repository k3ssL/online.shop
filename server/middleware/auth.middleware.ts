import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {User} from "../src/models/users.model";
import {UsersService} from "../src/users/users.service";
import {verifyToken} from "../utils/verifyToken.utils";

export interface ExpressRequestInterface extends Request {
    user?: User
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) {}

    async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next()
            return
        }

        const decoded = verifyToken(req);
        if (!decoded) {
            return res.status(401).json({ message: 'Not authorized' })
        }

        const user = await this.usersService.findById(decoded.id);
        req.user = user
        next()
    }
}