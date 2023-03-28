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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = require("bcrypt");
const config_1 = __importDefault(require("../config"));
const { pepper, saltRounds } = config_1.default;
class UserStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from('users')
                    .select();
                return data;
            }
            catch (error) {
                throw new Error(`Cannot fetch users ${error}`);
            }
        });
    }
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = (0, bcrypt_1.hashSync)(u.password + pepper, parseInt(saltRounds));
                // fName and lName to lowercase to allow naming consistency
                const { data, error, status } = yield database_1.default
                    .from('users')
                    .insert({ first_name: u.first_name.toLowerCase(), last_name: u.last_name.toLowerCase(), user_name: u.user_name, password: hashedPassword })
                    .select()
                    .single();
                if (data !== null) {
                    delete data.password;
                    return data;
                }
                else
                    return null;
            }
            catch (error) {
                throw new Error(`Cannot create user ${error}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("users")
                    .select()
                    .eq('id', id)
                    .single();
                if (data !== null) {
                    delete data.password;
                    return data;
                }
                else
                    return null;
            }
            catch (error) {
                throw new Error(`Cannot find user ${error}`);
            }
        });
    }
    authenticate(user_name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from('users')
                    .select()
                    .eq('user_name', user_name);
                if (data !== null) {
                    const user = data[0];
                    const correctPassword = yield (0, bcrypt_1.compare)(password + pepper, user.password);
                    if (correctPassword) {
                        delete user.password;
                        return user;
                    }
                    else {
                        throw new Error();
                    }
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Something went wrong`);
            }
        });
    }
}
exports.UserStore = UserStore;
