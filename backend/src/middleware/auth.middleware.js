import jwt from "jsonwebtoken";

/**
 * JWT Authentication Middleware (Bearer Token Only)
 */
const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // 1. Check header exists
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Authorization header missing",
            });
        }

        // 2. Check Bearer format
        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Invalid token format",
            });
        }

        // 3. Extract token
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token not found",
            });
        }

        // 4. Ensure secret exists
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                success: false,
                message: "Server error: JWT secret not configured",
            });
        }

        // 5. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 6. Attach user to request
        req.user = {
            id: decoded.id,
        };

        req.token = token; // optional (useful for debugging/logging)

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Invalid or expired token",
        });
    }
};

export default verifyJWT;