require("dotenv").config();
const express = require("express");
const staticItems = require("./models/staticData");
const connectDB = require("./db/connect");

const app = express();

app.use(express.json());

var cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 8000;

const recommendations_routes = require("./routes/recommendations");

const savePostRoute = require("./routes/savePostRoute");

const userRoutes = require("./routes/userRoutes");

const itineraryPost = require("./routes/itinerary");

const creacreateRecommendation = require("./routes/recommendations");

app.get("/", (req, res) => {
  res.send("Hi, This is API Developed by Sunny");
});

// staticData
// GET /items - Get all items
app.get("/staticdata", (req, res) => {
  try {
    res.json(staticItems);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//Recommendations
app.use("/api/recommendations", recommendations_routes);

// User routes
app.use("/api/users", userRoutes);

// create Recommendation
app.use("/api/createrecommendation", creacreateRecommendation);

// itinerary posts
app.use("/api/itineraryposts", itineraryPost);

// saveposts
app.use("/api/savepost", savePostRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes, I'm connected`);
    });
  } catch {
    console.log(error);
  }
};

start();