require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("RSCT Backend is Running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
console.log("🔍 MongoDB URI:", process.env.MONGO_URI);
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Large Area Target", description: "High-performance large area sputtering target." },
    { id: 2, name: "Rotatable Target", description: "Durable rotatable target for enhanced efficiency." },
    { id: 3, name: "Alloy Target", description: "Custom alloy targets designed for precision applications." },
    { id: 4, name: "Plasma Spray Target", description: "Advanced plasma/thermal spray target for semiconductor sector." }
  ];
  res.json(products);
});

