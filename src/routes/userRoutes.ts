import { Router, Request, Response } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
    const users = await getUsers();
    res.json(users);
});

export default router;