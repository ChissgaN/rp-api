import express from "express";
import routes from "./routes/index.js";
import appConfig from "./config/app_config.js";

const app = express();
app.use(express.json());

routes(app);

app.listen(appConfig.port, () => {
  console.log(`Server is running on: ${appConfig.url}`);
});
