import { Request, Response } from "express";

import Checks from "../helpers/checks";
import Operation from "../models/Operation";

class OperationController {
  _checks: Checks;

  constructor() {
    this._checks = new Checks();
  }

  public getOperations = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const operations = await Operation.find().sort({ createdAt: "desc" });
      return res.status(200).json({
        succes: true,
        operations,
      });
    } catch (e) {
      return res.send(500).json({
        succes: false,
        msg: "Internal server ERROR, please try later",
      });
    }
  };

  public addOperation = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { operation, result } = req.body;
      const checked = this._checks.operationCheck(operation, result);
      console.log(operation, result);
      if (checked) {
        return res.status(400).json({
          success: false,
          msg: "Send all camps",
        });
      }
      const newOperation = await new Operation({
        operation,
        result,
      });
      newOperation.save();
      return res.status(200).json({
        success: true,
      });
    } catch {
      return res.status(500).json({
        succes: false,
        msg: "Internal server ERROR, please try later",
      });
    }
  };

  public deleteOperation = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const deleted = await Operation.findByIdAndDelete(id);
      if (deleted === null) {
        return res.status(400).json({
          succes: false,
          msg: "ID invalid, please send a valid ID",
        });
      }
      return res.status(200).json({
        succes: true,
      });
    } catch (e) {
      return res.status(500).json({
        succes: false,
        msg: "Internal server error",
      });
    }
  };
}

export default OperationController;
