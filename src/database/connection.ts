import { connect } from "mongoose";


export default class Connection {
    private db_connection: string;
  
    constructor(db_connection: string) {
      this.db_connection = db_connection;
    }
  
    async createConnection() {
      try {
        await connect(this.db_connection);
        console.info("Database connected");
      } catch (error) {
        console.error(error);
      }
    }
  }
  