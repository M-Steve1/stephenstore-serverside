import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../config';

const { jwtSecret } = env;

export const idAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1];
    const decodedToken = jwt.verify(token as string, jwtSecret as string);
    const userId = parseInt(req.params.id);

    // @ts-ignore
    if (userId !== decodedToken.userId) {
      res.status(400).json('UserId does not match');
    } else {
      next();
    }
  } catch (error) {
    // @ts-ignore
    if (error.message === 'jwt expired') {
      res.json('jwt expired');
    }
  }
};
