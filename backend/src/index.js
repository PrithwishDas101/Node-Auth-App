import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "backend/.env",
    quiet: true
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("App error:", error);
            process.exit(1);
        });

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

startServer();