import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import { connectDB } from "./config/database";

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);

app.use(morgan("dev"));

// importing routes
import userRouter from "./routes/user.routes";

// using routes
app.use("/api/my/user", userRouter);

app.listen(PORT, () => {
	console.log(`SERVER STARTED ON PORT ${PORT}`);
});
