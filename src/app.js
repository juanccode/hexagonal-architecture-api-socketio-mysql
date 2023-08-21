import express from "express";
import cors from "cors";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import socketAdapter from "./socket/socketAdapter.js";
import userRouter from "./user/infrastructure/userRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.Server(app);
const io = socketAdapter(server);

app.use(
  "/users",
  (req, res, next) => {
    req.io = io;
    next();
  },
  userRouter
);

// path publico
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "public")));

export { app, server, io };
