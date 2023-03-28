"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const config_1 = __importDefault(require("./config"));
const { supabaseUrl, supabaseAnonKey, supabaseUrlTest, supabaseAnonKeyTest, env } = config_1.default;
let client;
if (env === "dev") {
    client = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
}
else {
    client = (0, supabase_js_1.createClient)(supabaseUrlTest, supabaseAnonKeyTest);
}
exports.default = client;
//# sourceMappingURL=database.js.map