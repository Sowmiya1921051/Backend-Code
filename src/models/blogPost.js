// models/blogPost.js
import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

const blogPostSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

blogPostSchema.pre('save', async function(next) {
  const doc = this;
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'postId' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );
    doc.id = counter.sequence_value;
    next();
  } catch (error) {
    next(error);
  }
});

blogPostSchema.set('id', false);

const BlogPost = mongoose.model('BlogPost', blogPostSchema, 'posts');

export default BlogPost;
