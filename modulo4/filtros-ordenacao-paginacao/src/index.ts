import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getName } from "./endpoints/getName";
import { filterUser } from "./endpoints/filterUser";

app.get("/allusers", getName);

app.get("/allusers", getAllUsers);

app.get("/allusers/:type", filterUser);
