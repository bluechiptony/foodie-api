import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import userRoutes from "./routes/user";
import authenticationRoutes from "./routes/authentication";

dotenv.config();
const applicationName = process.env.APP_NAME;
const port = process.env.PORT;
const foodie: Application = express();

foodie.use(express.json());
foodie.use(bodyParser.urlencoded({ extended: false }));
foodie.use(bodyParser.json());
foodie.use(cors());

foodie.use("/users", userRoutes);
foodie.use("/auth", authenticationRoutes);

foodie.listen(port, async () => {
  console.log(`${applicationName} running and listening on port ${port}`);
});
