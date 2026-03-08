import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import menuRoutes from "./route/menuRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/menu", menuRoutes);

app.get("/", (req, res) => {
res.render("home");
});

// Database connection
connectDB();

// Start server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
