import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      res.status(403).json({
        status: "failed",
        message: "Access denied",
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
