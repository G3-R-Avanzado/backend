import { Router } from "express";
import {
    getAllPublication, 
    createPublication,
    getStatus,
    updatePublication,
    getPublicationByStatus,
    getPublicationByUser
} from "../controllers/publication.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { publicationSchema } from "../schemas/publication.schema.js";


const router = Router();

router.post("/", validateSchema(publicationSchema), createPublication);
router.get("/getall", getAllPublication);
router.get("/getall/status/:_id", getPublicationByStatus);
router.get("/getall/user/:_id", getPublicationByUser);

router.get("/status", getStatus);
router.put("/update", validateSchema(publicationSchema), updatePublication)

export default router;
