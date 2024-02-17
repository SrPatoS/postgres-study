import { randomUUID } from "crypto";
import { DataTypes, Model } from "sequelize";
import { database } from "../sequelize";
import { IProduct } from "../services/product/product.dto";

interface productInstance extends Model<IProduct>, IProduct { };

export const ProductModel = database.define<productInstance>("user", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: () => randomUUID(),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, { timestamps: true });