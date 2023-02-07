import { Schema, model, Model, connection } from "mongoose";

type UserType = {
  email: string;
  age: number;
  interests: [string];
  name: {
    firstName: string;
    lastname: string;
  };
};

const schema = new Schema<UserType>({
  email: { type: String, required: true },
  age: { type: Number, required: true },
  interests: [String],
  name: {
    firstName: { type: String, required: true },
    lastName: String,
  },
});

const modelName: string = "User";


  export default connection && connection.models[modelName]
    ? connection.models[modelName] as Model<UserType>
    : model<UserType>(modelName, schema);

