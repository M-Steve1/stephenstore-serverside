"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.createUser = exports.getUserById = exports.index = void 0;
const user_1 = require("../models/user");
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
const userStore = new user_1.UserStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield userStore.index();
        res.status(200).json(allUser);
    }
    catch (error) {
        throw new Error(`Cannot get users: ${error}`);
    }
});
exports.index = index;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const theUser = yield userStore.show(parseInt(userId));
        res.status(200).json(theUser);
    }
    catch (error) {
        throw new Error(`Cannot get the user: ${error}`);
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, user_name, password } = req.body;
        const isTaken = yield userService.isUserNameTaken(user_name);
        if (isTaken) {
            res.status(400).json('Username is taken, choose another');
        }
        else {
            const user = {
                first_name: first_name,
                last_name: last_name,
                user_name: user_name,
                password: password
            };
            const createdUser = yield userStore.create(user);
            const payload = { userId: createdUser === null || createdUser === void 0 ? void 0 : createdUser.id };
            const token = yield userService.createToken(payload);
            res.status(201).json({ token: token, userId: createdUser === null || createdUser === void 0 ? void 0 : createdUser.id, userName: createdUser === null || createdUser === void 0 ? void 0 : createdUser.user_name });
        }
    }
    catch (error) {
        throw new Error(`Could not create a user: ${error}`);
    }
});
exports.createUser = createUser;
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, password } = req.body;
        const signedInUser = yield userStore.authenticate(user_name, password);
        const payload = { userId: signedInUser === null || signedInUser === void 0 ? void 0 : signedInUser.id };
        const token = yield userService.createToken(payload);
        res.status(200).json({ token: token, userId: signedInUser === null || signedInUser === void 0 ? void 0 : signedInUser.id, userName: signedInUser === null || signedInUser === void 0 ? void 0 : signedInUser.user_name });
    }
    catch (error) {
        res.status(400).json(`${error}`);
    }
});
exports.authenticate = authenticate;
//# sourceMappingURL=userController.js.map