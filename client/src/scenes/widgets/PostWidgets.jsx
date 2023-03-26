import React, { useState } from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography, useTheme, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import { setPost } from "../../state/state";

export default function PostWidgets({
  postId,
  postUserId,
  name,
  descritption,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) {
  return <div>PostWidgets</div>;
}
