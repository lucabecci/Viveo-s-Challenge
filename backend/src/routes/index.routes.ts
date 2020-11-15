import { IRouter, Router } from "express";
import IndexController from "../controllers/index.controller";

class IndexRouter {
  public _router: IRouter;
  public _indexController: IndexController;
  constructor() {
    this._router = Router();
    this._indexController = new IndexController();
    this.routes();
  }

  public routes(): void {
    this._router.get("/", this._indexController.index);
  }
}

export default IndexRouter;
