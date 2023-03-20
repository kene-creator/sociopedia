import express from "express";
import { getPostFeed, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//* READ
router.route("/").get(verifyToken, getPostFeed);
router.route("/:userId/posts").get(verifyToken, getUserPosts);

//* UPDATE
router.route("/:id/like").patch(verifyToken, likePost);

export default router;
