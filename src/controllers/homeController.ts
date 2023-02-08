import { error } from "console";
import { Request, Response } from "express";
import User from "../models/User";

const homeController = {
  async find(req: Request, res: Response) {
    try {
      let user = await User.find({}).sort({ "name.firstName": 1 });
      return res.status(200).json(user);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, age, interests } = req.body;
      const parseAge = parseInt(age.req.body);

      const newUser = await User.create({
        name: {
            firstName: firstName,
            lastName: lastName,
        },
        email,
        age: parseAge,
        interests
      });
      return res.status(201).json(newUser);
    } catch {
        console.error()
      return res.status(500).json("nao foi possivel cadastrar")
      
    }
  },
};

export default homeController;
