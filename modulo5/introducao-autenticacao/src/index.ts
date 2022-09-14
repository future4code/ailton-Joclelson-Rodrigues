import app from "./app";
import User from "./endpoints/User";

const user = new User();

app.post("/user/signup", user.create);
app.post("/user/login", user.login);
app.get("/user/profile", user.profile);
