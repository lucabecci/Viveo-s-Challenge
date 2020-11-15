import mongoose, { Mongoose, ConnectionOptions } from "mongoose";
import config from "../config/config";

class Database {
  public _mongoose: Mongoose;
  protected _URI: string;
  public _options: ConnectionOptions;

  constructor() {
    this._mongoose = mongoose;
    this._URI = config.DB.URI;
    this._options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }

  public connection(): void {
    this._mongoose.connect(this._URI, this._options)
      .then(() => console.log("DB is connected"))
      .catch(() => {
        console.log("DB is not connected");
        process.exit(0);
      });
  }
}

export default Database;
