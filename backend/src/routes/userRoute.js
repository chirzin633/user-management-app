import { Router } from "express";
import validate from "../middlewares/validate.js";
import { userSchema } from "../schemas/userSchema.js"
import { getAll, create, update, remove, getUserByEmail } from "../controllers/userController.js";

const router = Router();

router.get('/', getAll);
router.get('/email', getUserByEmail);
router.post('/', validate(userSchema), create);
router.put('/:id', validate(userSchema), update);
router.delete('/:id', remove);

export default router;