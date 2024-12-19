import express from "express";
import routes from "./routes/index.js";
import appConfig from "./config/app_config.js";
import { ErrorHandler, LogError } from "./middlewares/ErrorsHandler.js";
const app = express();
app.use(express.json());

routes(app);
app.use(LogError);
app.use(ErrorHandler);

app.listen(appConfig.port, () => {
  console.log(`Server is running on: ${appConfig.url}`);
});
