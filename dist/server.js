"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("./database");
dotenv_1.default.config();
mongoose_1.default.set("strictQuery", false);
database_1.mongoConnect.createConnection();
const server = (0, express_1.default)();
server.set("view engine", "mustache");
server.set("views", path_1.default.join(__dirname, "views"));
server.engine("mustache", (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(index_1.default);
server.use((req, res) => {
    res.status(404).send("Página não encontrada!");
});
server.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`));
