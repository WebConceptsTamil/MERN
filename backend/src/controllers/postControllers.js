import Post from "../model/postModel.js";

// GET POSTS
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: message.error });
  }
};

// CREATE POST
const createPost = async (req, res) => {
  const { title, description } = req.body;
  console.log(title);
  console.log(description);
  try {
    const post = await Post.create({ title, description });
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE POST
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      res.status(404);
      return res.status(404).json({ message: "Post Not Found" });
    }
    res.status(200).json({ post });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

// UPDATE POST
const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      res.status(404);
      return res.status(404).json({ message: "Post Not Found" });
    }
    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;
    const updatePost = await post.save();
    res.status(200).json({
      id: updatePost._id,
      title: updatePost.title,
      description: updatePost.description,
    });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

// DELETE POST
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

export { getPosts, createPost, getSinglePost, updatePost, deletePost };
