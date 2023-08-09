const Recommendation = require("../models/recommendation");

const getAllRecommendations = async (req, res) => {
  const { title, region, descriptor, sort, select } = req.query;
  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (region) {
    queryObject.region = region;
  }

  if (descriptor) {
    queryObject.descriptor = descriptor;
  }

  let apiData = Recommendation.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 100;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const Recommendations = await apiData;
  res.status(200).json({ Recommendations });
};

const getAllRecommendationsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllRecommendationsTesting" });
};

const createRecommendation = async (req, res) => {
  // if (!req.user || !req.user._id) {
  //   return res.status(401).json({ error: "User not authenticated" });
  // }
  const apiKey = req.headers["x-api-key"];
  const {
    title,
    images,
    hours,
    cost,
    experience,
    description,
    location,
    descriptor,
    region,
  } = req.body;

  try {
    // const creator = req.user.email;
    console.log("Request Body:", req.body);
    if (
      !title ||
      !images ||
      !hours ||
      !cost ||
      !experience ||
      !description ||
      !location ||
      !descriptor ||
      !region
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields in the request." });
    }

    // if (apiKey !== process.env.SECRET_KEY) {
    //   return res.status(403).json({ error: "Unauthorized. Invalid API key." });
    // }

    if (
      !location.type ||
      !location.coordinates ||
      !Array.isArray(location.coordinates) ||
      location.coordinates.length !== 2
    ) {
      return res.status(400).json({
        error:
          "Invalid location format. Please provide valid location coordinates.",
      });
    }
    const newRecommendation = await Recommendation.create({
      title,
      images,
      hours,
      cost,
      experience,
      description,
      location,
      descriptor,
      region,
    });

    console.log("New Recommendation:", newRecommendation);

    res.status(201).json(newRecommendation);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create recommendation." });
  }
};

module.exports = {
  getAllRecommendations,
  getAllRecommendationsTesting,
  createRecommendation,
};
