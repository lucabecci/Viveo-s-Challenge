import { IRouter, Router } from "express";
import OperationController from "../controllers/operations.controller";

class CalculatorRouter {
  public _router: IRouter;
  public _operationController: OperationController;
  constructor() {
    this._router = Router();
    this._operationController = new OperationController();
    this.routes();
  }

  public routes(): void {
    this._router.get("/", this._operationController.getOperations);
    this._router.post("/", this._operationController.addOperation);
    this._router.delete("/:id", this._operationController.deleteOperation);
  }
}

export default CalculatorRouter;
