import express from "express";
import { addPost, allposts } from "../controller/post.js";
import { allUsers, register } from "../controller/user.js";


const router = express.Router();

router.get('/all-users', allUsers);
router.post('/register', register);
router.get('/all-posts', allposts);
router.post('/add-post', addPost);

export default router; 