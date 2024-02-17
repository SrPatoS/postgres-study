import { Sequelize } from "sequelize";
import { environment } from "./environment";

export const database = new Sequelize(environment.PG_URL);