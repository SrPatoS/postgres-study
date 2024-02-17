import { z } from "zod";

export const productZod = z.object({
    name: z.string(),
    price: z.number()
});