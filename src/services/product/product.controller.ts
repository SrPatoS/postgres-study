import { ProductCreateUseCase } from "./usecases/product.create";
import { ProductDeleteUseCase } from "./usecases/product.delete";
import { ProductGetAllUseCase } from "./usecases/product.getall";
import { ProductUpdateUseCase } from "./usecases/product.update";
import { Request, Response } from "express";

export class ProductController {
    constructor(
        private createUseCase: ProductCreateUseCase,
        private updateUseCase: ProductUpdateUseCase,
        private deleteUseCase: ProductDeleteUseCase,
        private getAllUseCase: ProductGetAllUseCase
    ) { }

    public async create(req: Request, res: Response) {
        try {
            const result = await this.createUseCase.execute(req.body);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await this.updateUseCase.execute(id, req.body);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await this.deleteUseCase.execute(id);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const result = await this.getAllUseCase.execute();
            res.send(result);
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }
}