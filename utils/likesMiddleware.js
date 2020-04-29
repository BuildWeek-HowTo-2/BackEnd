const likes = require('../likes/likesModel')

const validateLikeShape = (req, res, next) => {
  if (!req.body.user_id || !req.body.tutorial_id) {
    res.status(400).json({ message: "Missing required user_id or tutorial_id" });
  } else {
    next();
  }
};

const validateLikeExistingPost = (req, res, next) => {
  likes.findBy(req.body)
    .then((like) => {
      if (like) {
        res.status(400).json({ message: "That like already exists." });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json(err);
    });
};

module.exports = {
  validateLikeShape,
  validateLikeExistingPost,
};