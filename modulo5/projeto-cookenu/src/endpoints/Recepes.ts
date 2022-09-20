import { Request, Response } from "express";
import RecepesData from "../data/RecepesData";
import FieldsEmptyError from "../error/FieldsEmptyError";
import UnauthorizedUser from "../error/UnauthorizedUser";
import currentDate from "../functions/currentDate";
import RecepesModel from "../model/RecepesModel";
import { USER_ROLES } from "../model/UserModel";
import Authenticator from "../services/Authenticator";

class Recepes {
  public async create(req: Request, res: Response) {
    try {
      const { title, preparationMode, userId } = req.body;
      const token = req.headers.authorization as string;

      if (!title || !preparationMode || !userId) {
        throw new FieldsEmptyError();
      }

      const id = Date.now().toString();
      const createDate = currentDate();

      const authenticator = new Authenticator();
      const verifyToken = authenticator.verifyToken(token) as any;
      if (verifyToken.id !== userId) {
        throw new UnauthorizedUser();
      }

      const newRecepe = new RecepesModel(
        id,
        title,
        preparationMode,
        createDate,
        userId
      );
      const recepeData = new RecepesData();
      const saveRecepe = await recepeData.saveRecepe(newRecepe);

      res.status(201).send(saveRecepe);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async recepes(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const verifyToken = authenticator.verifyToken(token);
      if (!verifyToken) {
        throw new UnauthorizedUser();
      }

      const recepeData = new RecepesData();
      const getRecepes = await recepeData.getRecepes(id);

      res.status(200).send(getRecepes);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async editRecipe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const id = req.params.id;
      const { title, description } = req.body;

      if (!token) {
        throw new UnauthorizedUser();
      }

      if (!title || !description) {
        throw new FieldsEmptyError();
      }
      const idPerson = new Authenticator().verifyToken(token) as any;

      const recepeData = new RecepesData();
      const getRecepes = await recepeData.getRecepes(id);

      if (!getRecepes) {
        throw new Error("Recipe not found");
      }

      if (
        idPerson.role === USER_ROLES.NORMAL &&
        getRecepes.idUser !== idPerson.id
      ) {
        throw new Error("Usuario nao autorizado");
      }

      const result = await recepeData.updateRecepe(id, title, description);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
export default Recepes;
