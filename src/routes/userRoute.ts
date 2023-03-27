import express from 'express';
import {
  index,
  getUserById,
  createUser,
  authenticate
} from '../controllers/userController';
import { idAuth } from '../middleware/idAuth';
import { tokenAuth } from '../middleware/tokenAuth';

const userRouter = express.Router();

userRouter.get('/index', tokenAuth, index);
userRouter.get('/show/:id', idAuth, getUserById);
userRouter.post('/signup', createUser);
userRouter.post('/signin', authenticate);

export default userRouter;
