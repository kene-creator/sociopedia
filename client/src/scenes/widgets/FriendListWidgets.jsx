import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetsWrapper";
import { setFriends } from "../../state/state";

export default function FriendListWidgets({ userId }) {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const theme = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => [state.user.friends]);

  const getFriends = async () => {
    const response = await fetch(`http://localhost:3001/${userId}/friends`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data.data.friends }));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitile={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
}
