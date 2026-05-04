const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const friendRoutes = require("./routes/friends");
const avatarRoutes = require("./routes/avatar");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cubera";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/avatar", avatarRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});