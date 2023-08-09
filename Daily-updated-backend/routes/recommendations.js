const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

// const jwtKey = process.env.JWT_SECRET;

const {
  getAllRecommendations,
  getAllRecommendationsTesting,
  createRecommendation,
} = require("../controllers/recommendations");

router.route("/").get(getAllRecommendations);
router.route("/testing").get(getAllRecommendationsTesting);

router.route("/").post(
  (req, res, next) => {
    if (!req.body.descriptor) {
      req.body.descriptor = "food";
    }
    next();
  },
  middleware,
  createRecommendation
);

module.exports = router;
