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
import WidgetWrapper from "../../components/WidgetsWrapper";

export default function PostWidgets({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) {
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const loggedInUser = useSelector((state) => state.user._id);
  const isLiked = Object.keys(likes).includes(loggedInUser);
  const likeCount = Object.keys(likes).length;
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(
      `https://sociopedia-tw54.onrender.com/posts/${postId}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: loggedInUser }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost.data.updatedPost }));
  };

  return (
    <WidgetWrapper mt="2rem">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`https://sociopedia-tw54.onrender.com/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComment(!isComment)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComment && (
        <Box>
          {comments.map((comment, i) => {
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>;
          })}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
}
