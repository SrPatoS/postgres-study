import { ProductModel } from "../../../models/product.model";

export class ProductGetAllUseCase {
    public async execute(): Promise<any> {
        return await ProductModel.findAll();
    }
}