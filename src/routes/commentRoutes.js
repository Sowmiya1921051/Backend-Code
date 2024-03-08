// routes/commentRoutes.js
import express from 'express';
import { addComment, getCommentsByPostId, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/posts/:postId/comments', addComment);

router.get('/posts/:postId/comments', getCommentsByPostId);

router.delete('/comments/:commentId', deleteComment);

export default router;
