import { z } from "zod";

const envSchema = z.object({
    PG_URL: z.string()
});

export const environment = envSchema.parse(process.env);