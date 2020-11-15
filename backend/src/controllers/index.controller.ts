import { Request, Response } from "express";

class IndexController {
  public index = (req: Request, res: Response): void => {
    res.status(200).json("INDEX API");
  };
}

export default IndexController;
