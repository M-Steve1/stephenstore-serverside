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
exports.idAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const { jwtSecret } = config_1.default;
const idAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        const decodedToken = jsonwebtoken_1.default.verify(token, jwtSecret);
        const userId = parseInt(req.params.id);
        // @ts-ignore
        if (userId !== parseInt(decodedToken.userId)) {
            res.status(400).json('UserId does not match');
        }
        else {
            next();
        }
    }
    catch (error) {
        // @ts-ignore
        if (error.message === 'jwt expired') {
            res.json('jwt expired');
        }
    }
});
exports.idAuth = idAuth;
//# sourceMappingURL=idAuth.js.map