import express, { Router } from "express";
import {
  getPost,
  createPost,
  EditBlog,
  deletePost,
  likePlus,
} from "../controllers/posts.js";

const router = Router();

router.get("/", getPost);
router.post("/create", createPost);
router.post("/create/:id", EditBlog);
router.delete("/delete/:id", deletePost);
router.post("/like/:id", likePlus);
export default router;
