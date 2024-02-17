import { ProductUpdateUseCase } from "./usecases/product.update";
import { ProductCreateUseCase } from "./usecases/product.create";
import { ProductDeleteUseCase } from "./usecases/product.delete";
import { ProductGetAllUseCase } from "./usecases/product.getall";
import { ProductController } from "./product.controller";
import { Router } from "express";

const controller = new ProductController(
    new ProductCreateUseCase,
    new ProductUpdateUseCase,
    new ProductDeleteUseCase,
    new ProductGetAllUseCase
);

export const productRoutes = Router();

productRoutes.post("/create", controller.create.bind(controller));
productRoutes.put("/update/:id", controller.update.bind(controller));
productRoutes.delete("/delete/:id", controller.delete.bind(controller));
productRoutes.get("/get", controller.getAll.bind(controller));