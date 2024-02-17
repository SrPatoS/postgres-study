import { ProductModel } from "../../../models/product.model";
import { productZod } from "../product.zod";
import { IProduct } from "../product.dto";

export class ProductCreateUseCase {
    public async execute(data: IProduct): Promise<any> {
        try {
            productZod.parse(data);
        } catch (error) {
            throw error;
        }

        const { name, price } = data;

        const result = await ProductModel.create({
            name: name,
            price: price
        });

        return result;
    }
}