import app from "./app";
import getProducts from "./endpoints/getProducts";
import getPurchase from "./endpoints/getPurchase";
import getUserPurchases from "./endpoints/getUserPurchases";
import getUsers from "./endpoints/getUsers";
import postProducts from "./endpoints/postProducts";
import postPurchase from "./endpoints/postPurchase";
import postUsers from "./endpoints/postUsers";

app.get("/users", getUsers);
app.post("/user", postUsers);

app.get("/products?search=&order=", getProducts);
app.post("/products", postProducts);

app.get("/users/:user_id/purchases", getPurchase);
app.get("/user-purchases", getUserPurchases);
app.post("/purchases", postPurchase);
