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

        const PORT = process.env.PORT || 5000;

        const server = app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("Server error:", error);
            process.exit(1);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

startServer();