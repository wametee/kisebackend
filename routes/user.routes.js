// import { Router } from "express";


// const userRouter = Router();



// userRouter.get("/", (req, res) => res.send({ body: { title: 'Get all users' }}));
// // dynamic route or parameter
// userRouter.get("/:id", (req, res) => res.send({ body: { title: 'Get user details' }}));

// userRouter.post("/", (req, res) => res.send({ body: { title: 'Create new user' }}));


// export default userRouter;
import express from 'express';
import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/', createUser);

export default userRouter;