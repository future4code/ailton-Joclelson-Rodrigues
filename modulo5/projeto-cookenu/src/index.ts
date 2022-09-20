import app from "./app";
import Recepes from "./endpoints/Recepes";
import User from "./endpoints/User";

const user = new User();
const recepe = new Recepes();

app.post("/signup", user.create);
app.post("/login", user.login);
app.get("/user/profile", user.profile);
app.get("/user/feed", user.feed);
app.get("/user/:id", user.userProfile);
app.post("/user/follow", user.follow);
app.post("/user/unfollow", user.unfollow);

app.post("/recipe", recepe.create);
app.get("/recipe/:id", recepe.recepes);
app.put("/recipe/edit/:id", recepe.editRecipe);
