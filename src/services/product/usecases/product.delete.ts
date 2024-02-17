import { ProductModel } from "../../../models/product.model";

export class ProductDeleteUseCase {
    public async execute(id: string): Promise<any> {
        const product = await ProductModel.findOne({ where: { id: id } });

        if (!product) {
            throw new Error("Product not found");
        }

        await product.destroy();

        return { message: "product deleted" };
    }
}