import { ProductModel } from "../../../models/product.model";
import { productZod } from "../product.zod";
import { IProduct } from "../product.dto";

export class ProductUpdateUseCase {
    public async execute(id: string, data: IProduct): Promise<any> {
        try {
            productZod.parse(data);
        } catch (error) {
            throw error;
        }

        const product = await ProductModel.findOne({ where: { id: id } });
        
        if (!product) {
            throw new Error("Product not found");
        }

        const { name, price } = data;

        product.name = name;
        product.price = price;

        await product.save();

        return product;
    }
}