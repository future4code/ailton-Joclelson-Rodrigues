import { Request, Response } from "express";
import ShowBusiness from "../business/ShowBusiness";
import { inputCreateDTO } from "../models/ShowModel";

class Showcontroller {
  constructor(private showBusiness: ShowBusiness) {}

  public create = async (req: Request, res: Response) => {
    try {
      const { band, startsAt } = req.body;
      const token = req.headers.authorization as string;

      const input: inputCreateDTO = {
        band,
        startsAt,
        token,
      };
      const response = await this.showBusiness.create(input);

      res.status(201).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}
export default Showcontroller;
