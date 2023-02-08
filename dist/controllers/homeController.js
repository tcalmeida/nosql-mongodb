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
const User_1 = __importDefault(require("../models/User"));
const homeController = {
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield User_1.default.find({}).sort({ "name.firstName": 1 });
                return res.status(200).json(user);
            }
            catch (_a) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, email, age, interests } = req.body;
                const parseAge = parseInt(age.req.body);
                const newUser = yield User_1.default.create({
                    name: {
                        firstName,
                        lastName,
                    },
                    email,
                    age: parseAge,
                    interests
                });
                return res.status(201).json(newUser);
            }
            catch (_a) {
                console.error(Error);
                return res.status(500).json("nao foi possivel cadastrar");
            }
        });
    },
};
exports.default = homeController;
