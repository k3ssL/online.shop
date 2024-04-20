import {ApiError} from "../error/ApiError";
import {HttpStatus, Injectable, NestMiddleware} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ApiErrorMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction, err?: Error) {
        if (err instanceof ApiError) {
            return res.status(err.status).json({ message: err.message });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
}