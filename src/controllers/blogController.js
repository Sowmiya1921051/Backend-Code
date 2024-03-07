// controllers/blogController.js
import BlogPost from '../models/blogPost.js';

export const createBlogPost = async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const newPost = await BlogPost.create({ title, body, author });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(id, { title, body }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBlogPost = async (req, res) => {
  const { id } = req.params;

  try {
    await BlogPost.findByIdAndDelete(id);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
