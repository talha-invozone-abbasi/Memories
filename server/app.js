import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routers/posts.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", router);

mongoose
  .connect(process.env.mongokey)
  .then(() => {
    app.listen(port, (err) => {
      if (err) return;
      console.log(`RUNNING on ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
