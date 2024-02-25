import { z } from "zod";

export const categorySchema = z.object({
  name: z.string({ required_error: "El nombre es requerido" }).min(4).max(50),
  subcategories: z
    .array(z.string({ required_error: "Las subcategorías son requeridas" }))
    .min(1),
});
