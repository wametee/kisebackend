import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", (req, res) => res.send({ body: { title: 'Sign Up' }}));

export default authRouter;