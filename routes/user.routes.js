import { Router } from "express";


const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ body: { title: 'Get all users' }}));
// dynamic route or parameter
userRouter.get("/:id", (req, res) => res.send({ body: { title: 'Get user details' }}));

userRouter.post("/", (req, res) => res.send({ body: { title: 'Create new user' }}));


export default userRouter;