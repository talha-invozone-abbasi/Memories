import mongoose from "mongoose";
import Post from "../models/posts.js";

export const getPost = async (req, res) => {
  try {
    const findAll = await Post.find();
    if (!findAll) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.json(findAll).status(200);
  } catch (err) {
    return res.status(404).json({ error: "Not Found" });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  const createPost = new Post(postBody);
  try {
    await createPost.save();
    res.json(createPost).status(201);
  } catch (err) {
    return res.status(404).json({ error: "Error in Creating post" });
  }
};

export const EditBlog = async (req, res) => {
  const { id: _id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ error: "Id is not Present" });
  try {
    const update = await Post.findByIdAndUpdate(
      _id,
      { ...body, _id },
      { new: true }
    );

    res.status(201).json(update);
  } catch (err) {
    return res.status(400).json({ error: "Id is not Present" });
  }
};
export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).json({ error: "Id is not Present" });
    await Post.findByIdAndRemove(_id);
    res.json("Delete");
  } catch (err) {
    return res.status(400).json({ error: "Id is not Present" });
  }
};

export const likePlus = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).json({ error: "Id is not Present" });
    const findPost = await Post.findById(_id);
    const updatedOne = await Post.findByIdAndUpdate(
      _id,
      { likeCount: findPost.likeCount + 1 },
      { new: true }
    );
    res.json(updatedOne);
  } catch (err) {
    return res.status(400).json({ error: "Id is not Present" });
  }
};
