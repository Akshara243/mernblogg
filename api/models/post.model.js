import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      //ref: 'User', // References User model
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes extra spaces
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: {
      type: [String], // Supports multiple categories
      default: ['uncategorized'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Ensures slug is always lowercase
      set: (value) => value.toLowerCase(), // Auto-converts input to lowercase
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
