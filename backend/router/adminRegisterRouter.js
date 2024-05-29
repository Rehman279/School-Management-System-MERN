import express from "express";
import { adminRegister } from "../controllers/adminRegisterController.js";
import { adminSignIn } from "../controllers/usersControllers.js";

const router = express.Router();


router.post('/signin', adminSignIn);
router.post('/admin', adminRegister);

export default router;

