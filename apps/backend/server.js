require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const contactRoutes = require("./src/routes/contactRoutes");
const authRoutes=require("./src/routes/authRoutes")

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "https://kenandev.vercel.app/")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    // Requests without an Origin header are local/server-to-server requests.
    if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
      return callback(null, true);
    }

    return callback(new Error(`CORS origin not allowed: ${origin}`));
  },
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Connect to database
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});