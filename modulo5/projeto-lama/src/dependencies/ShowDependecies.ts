import ShowBusiness from "../business/ShowBusiness";
import Showcontroller from "../controller/ShowController";
import ShowDatabase from "../database/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

const showController = new Showcontroller(
  new ShowBusiness(new ShowDatabase(), new Authenticator(), new IdGenerator())
);

export default showController;
