"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const address = '0.0.0.0:3000';
app.use(body_parser_1.default.json());
app.listen(3000, () => {
    console.log(`Listen on ${address}`);
});
