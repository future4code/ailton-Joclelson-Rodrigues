import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getName } from "./endpoints/getName";

app.get("/allusers", getName);

app.get("/allusers", getAllUsers);
