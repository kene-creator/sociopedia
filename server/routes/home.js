import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { getPostFeed, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// //* READ
// router.route("/:id").get(verifyToken, getUser);
// router.route("/:id/friends").get(verifyToken, getUserFriends);

//* UPDATE
// router.route("/:id/:friendId").patch(verifyToken, addRemoveFriend);

router.route("/").get(verifyToken, getUser, getPostFeed, getUserFriends);

export default router;
