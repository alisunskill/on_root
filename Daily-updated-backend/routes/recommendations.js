const express = require("express");
const router = express.Router();
const middleware = require("../middleware");
const multer = require("multer");
// const jwtKey = process.env.JWT_SECRET;
// const upload = require("../upload");

const {
  getAllRecommendations,
  getAllRecommendationsTesting,
  createRecommendation,
  deleteRecommendation,
  updateRecommendation,
} = require("../controllers/recommendations");

router.route("/").get(getAllRecommendations);
router.route("/testing").get(getAllRecommendationsTesting);

router.route("/:recommendationId").delete(deleteRecommendation);

router.route("/:recommendationId").put(updateRecommendation);

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
