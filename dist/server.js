"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const productServiceRoute_1 = __importDefault(require("./routes/productServiceRoute"));
const cartRoute_1 = __importDefault(require("./routes/cartRoute"));
const cors_1 = __importDefault(require("cors"));
const cartServiceRoute_1 = __importDefault(require("./routes/cartServiceRoute"));
const orderRoute_1 = __importDefault(require("./routes/orderRoute"));
const app = (0, express_1.default)();
const address = '0.0.0.0:3000';
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/user', userRoute_1.default);
app.use('/product', productRoute_1.default, productServiceRoute_1.default);
app.use('/order', orderRoute_1.default);
app.use('/cart', cartRoute_1.default, cartServiceRoute_1.default);
app.listen(3000, () => {
    console.log(`Listen on ${address}`);
});
app.get('/', (_req, res) => {
    res.json({ Message: "Working right, cool!" });
});
app.get('/happy', (_req, res) => {
    res.json({ Message: "Thank God" });
});
exports.default = app;
//# sourceMappingURL=server.js.map