import { z } from "zod";

export const publicationSchema = z.object({
    titulo: z
        .string({ required_error: "El titulo de la publicacion es requerido" })
        .min(4)
        .max(50),
    description: z
        .string({ required_error: "La descripcion es requerida" })
        .min(1),
    image: z
        .string({ required_error: "La descripcion es requerida" })
        .min(1),
    price: z
        .number({required_error: "Age is required", invalid_type_error: "Age must be a number"})
        .min(50, {message: "El precio debe ser mayor a 50"})
        .positive()
});