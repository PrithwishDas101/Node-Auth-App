import { Router } from 'express';
import {
    createPost,
    getPosts,
    getSinglePost,
    updatePost,
    deletePost
} from '../controllers/post.controller.js';

const router = Router();

router.post("/create", createPost);
router.get("/allPosts", getPosts);
router.get("/getPost/:id", getSinglePost);
router.put("/update/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;