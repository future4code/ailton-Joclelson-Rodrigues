import app from "./app";
import getProducts from "./endpoints/getProducts";
import getPurchase from "./endpoints/getPurchase";
import getUsers from "./endpoints/getUsers";
import postProducts from "./endpoints/postProducts";
import postPurchase from "./endpoints/postPurchase";
import postUsers from "./endpoints/postUsers";

app.get("/users", getUsers);
app.post("/users", postUsers);

app.get("/products", getProducts);
app.post("/products", postProducts);

app.get("/users/:user_id/purchases", getPurchase);
app.post("/purchases", postPurchase);
