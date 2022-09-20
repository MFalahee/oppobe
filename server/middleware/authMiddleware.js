async function authMiddleware(req, res, next) {
  try {
    // fake authentication middleware for now
    if (process.env.NODE_ENV === "dev") {
      // dev mode
      req.user = { type: "admin" };
      next();
    } else {
      req.user = { type: "admin" };
      next();
    }
  } catch {
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = authMiddleware;
