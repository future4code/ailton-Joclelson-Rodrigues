import app from "./app";
import User from "./endpoints/User";

const user = new User();

app.post("/signup", user.create);
app.post("/login", user.login);
app.get("/user/profile", user.profile);
app.get("/user/:id");
