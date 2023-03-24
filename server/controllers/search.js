import User from "../models/User.js";

const search = async (req, res) => {
  try {
    let payload = req.body.payload.trim();
    let users = await User.find({
      firstName: { $regex: payload, $options: "i" },
    });

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

export default search;
