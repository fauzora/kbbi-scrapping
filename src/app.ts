import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { defaultResponseMiddleware } from "./middlewares/defaultResponseMiddleware";
import responseMessage from "./utils/responseMessage";
import { routes } from "./routes";

dotenv.config();
const port = process.env.PORT;
const app: express.Application = express();
const msg = new responseMessage();

function InitMiddleware() {
  app.use(defaultResponseMiddleware);
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  for (const id in routes) {
    app.use(((<any>routes)[id]));
  }
}

function initializeRoutes() {
  // app.use(apiRuter);
  app.use("*", function (req, res) {
    res.defaultResponse(false, msg.notFoundMsg, {});
  });
}

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
  InitMiddleware();
  initializeRoutes();
});
