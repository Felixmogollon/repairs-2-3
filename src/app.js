import express from "express";
import morgan from "morgan";
import { router } from "./routes/index.js";
import { AppError } from "./common/errors/appError.js";
import { globalHandleError } from "./common/errors/error.controller.js";
import envs from "./config/enviroments/enviroments.js";
import { enableCors } from "./config/plugins/cors.plugin.js";

const app = express();
const ACCEPTED_ORIGINS = ["http://localhost:8080"];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
enableCors(app, ACCEPTED_ORIGINS);
if (envs.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("El código se esta ejecutando en desarrollo😉");
}
if (envs.NODE_ENV === "production") {
  console.log("El código se esta ejecutando en produccion😏 ");
}

app.use("/api/v1", router);
app.all("*", (req, res, next) => {
  return next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalHandleError);

export default app;

//registra solicitudes en modo de desarrollo, configura rutas, maneja errores 
// y exporta la aplicación para su uso en otros archivos.
