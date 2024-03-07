// models/blogPost.js
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Specify the collection name as 'posts'
const BlogPost = mongoose.model('BlogPost', blogPostSchema, 'posts');

export default BlogPost;
