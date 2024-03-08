// routes/blogRoutes.js
import express from 'express';
import { createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost } from '../controllers/blogController.js';

const router = express.Router();

router.post('/posts', createBlogPost);
router.get('/posts', getBlogPosts);
router.put('/posts/:id', updateBlogPost);
router.delete('/posts/:id', deleteBlogPost);

export default router;
