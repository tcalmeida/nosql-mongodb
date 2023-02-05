import Connection from "./connection";
import dotenv from "dotenv";

dotenv.config();

const mongoConnect = new Connection(process.env.MONGO_URL as string);

export { mongoConnect };
