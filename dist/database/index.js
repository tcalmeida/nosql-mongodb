"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const connection_1 = __importDefault(require("./connection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoConnect = new connection_1.default(process.env.MONGO_URL);
exports.mongoConnect = mongoConnect;
