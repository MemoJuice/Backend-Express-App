import express from "express";
import { router as apiRoutes } from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

const corsOptions = {
    origin: ["http://localhost:5173",
            "https://frontend-app-seven-xi.vercel.app"]
};


app.use(cors(corsOptions))

app.use(express.json());

// Middleware to parse cookie (required for cookie-base auth)
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);

// Catch-all for 404 Not Found
app.use((req, res, next) => {
  const error = new Error(`Not found: ${req.method} ${req.originalUrl}`);
  error.name = "NotFoundError";
  error.status = 404;
  next(error);
});

// Centralized Error Handling Middelware
app.use((err, req, res, next ) => {
 console.error(err.stack);
 res.status(err.status || 500).json({
    success: false,
    message: err.massage || "Internal Server Error",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
    stack: err.stack,
 });
});