import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../config';

const { jwtSecret } = env;

export const tokenAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1];
    jwt.verify(token as string, jwtSecret as string);
    next();
  } catch (error) {
    //@ts-ignore
    if (error.message === 'jwt expired') {
      res.json('jwt expired');
    }
  }
};
