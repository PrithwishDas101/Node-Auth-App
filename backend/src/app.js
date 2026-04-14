import express from "express";

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running fine ",
    });
});

export default app;