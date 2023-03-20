import express from "express";
import { getFeedPost, getUserPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//* READ
router.route("/").get(verifyToken, getFeedPost);
router.route("/:userId/posts").get(verifyToken, getUserPost);

//* UPDATE
router.route("/:id/like").patch(verifyToken, likePost);

export default router;
