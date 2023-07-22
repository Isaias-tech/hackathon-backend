import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import * as swaggerSpecs from "./config/swagger.config.json";
import corsOptions from "./config/cosrs.conf";
import router from "./routes/routes";

const app = express();

app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
