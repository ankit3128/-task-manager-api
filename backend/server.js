const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// Global Error Handler ✅
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT, () => console.log("Server running"));
})
.catch(err => console.log(err));