import "dotenv/config";
import express from "express";
import router from "./router";

const { NODE_ENV, PORT } = process.env;
const app = express();

app.use(express.json());
router(app);

const server = app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);

export default server;
