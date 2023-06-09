import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/state";
import PostWidgets from "./PostWidgets";

const PostsWidgets = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const token = useSelector((state) => state.token);

  const getPost = async () => {
    const response = await fetch("https://sociopedia-tw54.onrender.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setPosts({ post: data.data.post }));
  };

  const getUserPost = async () => {
    const response = await fetch(
      `https://sociopedia-tw54.onrender.com/posts/${userId}/posts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ post: data.data.post }));
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
              description={description}
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
