import Post from "../models/Post";
import User from "../models/User";

export const createPost = async (req, res) => {
  try {
    const { userId, picturePath, description } = req.body;
    const user = await User.findById(userId);

    const newPost = await Post.create({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    const post = await Post.find();

    res.status(201).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    req.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
