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

// mongoose
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("DB Error:", err));

// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/auth", authRoutes);

// app.listen(process.env.PORT, () =>
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
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);

// Server
app.listen(process.env.PORT || 10000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
