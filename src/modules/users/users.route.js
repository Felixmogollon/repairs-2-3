import express from "express";
import {
  deleteOne,
  findAll,
  create,
  findOne,
  login,
  updateOne,
} from "./users.controller.js";
import { validateExistUser } from "./users.middleware.js";

export const router = express.Router();
router.post("/", create);
router.post("/login", login);
router.get("/", findAll);
router
  .route("/:id")
  .get(validateExistUser, findOne)
  .put(validateExistUser, updateOne)
  .delete(validateExistUser, deleteOne);

  //(router) define las rutas y asocia las funciones de controlador y middleware correspondientes para manejar las operaciones 
  //CRUD relacionadas con los usuarios en una aplicación Express.
