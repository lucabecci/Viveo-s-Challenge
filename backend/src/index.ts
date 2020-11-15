import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import Database from "./database/database";
import config from "./config/config";
import IndexRouter from "./routes/index.routes";
import OperationRouter from "./routes/operations.routes";

class App {
  public _app: Application;
  public _database: Database;
  public _PORT: string | number;
  public _indexRouter: IndexRouter;
  public _operationRouter: OperationRouter;
  constructor() {
    this._app = express();
    this._database = new Database();
    this._PORT = config.PORT;
    this._indexRouter = new IndexRouter();
    this._operationRouter = new OperationRouter();
    this.database();
    this.config();
    this.routes();
  }

  public async database(): Promise<void> {
    await this._database.connection();
  }

  public config(): void {
    //port config
    this._app.set("port", this._PORT);
    //middlewares
    this._app.use(cors());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(express.json());
    this._app.use(morgan("dev"));
  }

  public routes(): void {
    this._app.use("/", this._indexRouter._router);
    this._app.use("/operation", this._operationRouter._router);
  }

  public run(): void {
    this._app.listen(this._PORT, () => {
      console.log("Server on port", this._PORT);
    });
  }
}

const app = new App();
app.run();

export default App
