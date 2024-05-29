import express from "express";
import { adminSignIn, studentSignIn, teacherSignIn } from "../controllers/usersControllers.js";

const router = express.Router();

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
router.post('/admin/register', adminSignIn);

export default router;
 
