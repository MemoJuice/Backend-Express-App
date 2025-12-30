import express from "express";
import { router as apiRoutes } from "./routes/index.js";
import cors from "cors";

export const app = express();
const corsOptions = {
    origin: ["http://localhost:5173",
            "https://frontend-app-seven-xi.vercel.app"]
};


app.use(cors(corsOptions))

app.use(express.json());

app.use("/api", apiRoutes);
