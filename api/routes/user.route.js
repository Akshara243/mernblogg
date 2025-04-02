import express from 'express';
import { deleteUser, getUser, getUsers, signout, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);


//const Post = require("../models/Post"); // Ensure you have the Post model



// Route to create a new post
router.post("/create", verifyToken, async (req, res) => {
  try {
    const { title, category, content } = req.body;

    if (!title || !category || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({
      title,
      category,
      content,
      author: req.user.id, // Attach user ID
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});





export default router;