"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const idAuth_1 = require("../middleware/idAuth");
const tokenAuth_1 = require("../middleware/tokenAuth");
const userRouter = express_1.default.Router();
userRouter.get('/index', tokenAuth_1.tokenAuth, userController_1.index);
userRouter.get('/show/:id', idAuth_1.idAuth, userController_1.getUserById);
userRouter.post('/signup', userController_1.createUser);
userRouter.post('/signin', userController_1.authenticate);
exports.default = userRouter;
