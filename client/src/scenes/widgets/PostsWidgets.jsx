import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/state";
import PostWidgets from "./PostWidgets";

const PostsWidgets = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const token = useSelector((state) => state.token);

  const getPost = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setPost({ post: data.data.post }));
  };

  const getUserPost = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch(setPost({ post: data.data.post }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPost();
    } else {
      getPost();
    }
  }, []);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          lastName,
          firstName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => {
          return (
            <PostWidgets
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              descritption={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          );
        }
      )}
    </>
  );
};

export default PostsWidgets;
