// commentController.js
import Comment from '../models/comment.js';
import BlogPost from '../models/blogPost.js';

export const addComment = async (req, res) => {
  try {
    const { postId, text, author } = req.body;

    const existingPost = await BlogPost.findById(postId);
    if (!existingPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    const newComment = await Comment.create({ postId, text, author });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ postId });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comment by its ID
export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Find the comment by its ID and delete it
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
