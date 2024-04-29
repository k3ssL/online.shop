import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import {User} from "../src/users/users.model";
import {JwtPayload} from "jsonwebtoken";
import {UsersService} from "../src/users/users.service";


export interface JwtResponseInterface extends JwtPayload {
    id: number
}

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

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Not authorized' }) 
            }
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY) as JwtResponseInterface
            const user = await this.usersService.findById(decoded.id);
            req.user = user
            next()
        } catch (e) {
            res.status(401).json({ message: 'Not authorized' })
        }
    }
}