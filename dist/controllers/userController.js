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
exports.createUser = exports.getUserById = exports.index = void 0;
const user_1 = require("../models/user");
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
        const theUser = yield userStore.show(userId);
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
        const user = {
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            password: password
        };
        const createdUser = yield userStore.create(user);
        res.status(201).json(createdUser);
    }
    catch (error) {
        throw new Error(`Could not create a user: ${error}`);
    }
});
exports.createUser = createUser;
