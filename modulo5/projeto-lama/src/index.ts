import app from "./app";
import showRouter from "./router/showsRouter";
import userRouter from "./router/userRouter";

app.use("/users", userRouter);
app.use("/shows", showRouter);
