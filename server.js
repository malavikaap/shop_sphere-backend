// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// import productRoutes from "./routes/productRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("DB Error:", err));

// // Routes
// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/auth", authRoutes);

// // Server
// app.listen(process.env.PORT || 10000, () =>
//   console.log(`Server running on port ${process.env.PORT}`)
// );


import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Allow both local + deployed frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://shopsphere-frontend-five.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);

// Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
