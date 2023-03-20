import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//* READ
router.route("/:id").get(verifyToken, getUser);
router.route("/:id/friends").get(verifyToken, getUserFriends);

//* UPDATE
router.route("/:id/:friendId").patch(verifyToken, addRemoveFriends);

export default router;
