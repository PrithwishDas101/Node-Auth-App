import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;