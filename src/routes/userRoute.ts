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

userRouter.get('/hope', (req, res) => {
  res.json({MessageOfHope: "Trust in the LORD your God and all will be well."})
})

export default userRouter;
