import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

export const app = express();

app.set("port", process.env.PORT);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true
  })
);

// Routes
import authRoutes from "./routes/auth.routes";
import mainRoutes from "./routes/main.routes";
app.use("/", mainRoutes);
app.use("/auth", authRoutes);

// Static
app.use("/public", express.static(path.join(__dirname, "public")));