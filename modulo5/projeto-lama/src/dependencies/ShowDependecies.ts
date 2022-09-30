import ShowBusiness from "../business/ShowBusiness";
import Showcontroller from "../controller/ShowController";
import { Authenticator } from "../services/Authenticator";

const showController = new Showcontroller(
  new ShowBusiness(new Authenticator())
);

export default showController;
