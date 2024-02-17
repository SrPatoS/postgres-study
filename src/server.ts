import { productRoutes } from "./services/product/product.routes";
import { database } from "./sequelize";
import express from "express";

const server = express();

server.use(express.json());

const start = async (): Promise<void> => {
    await database.sync();

    server.use("/product", productRoutes);

    await database.authenticate()
        .then(() => {
            console.log("database connected");
        });

    server.listen(3000);
}

start();