import express from "express";
import { allUsers, register } from "../controller/user.js";

const router = express.Router();

router.get('/all-users', allUsers);
router.post('/register', register);

export default router; 