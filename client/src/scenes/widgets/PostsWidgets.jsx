import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/state";
import PostWidgets from "./PostWidgets";

const PostsWidgets = () => {
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
};

export default PostsWidgets;
