import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            });
        }

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({
            username,
            email,
            password
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                _id: user._id,
                email: user.email,
                username: user.username
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email: email
        })

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }

        const isMatched = await user.comparePassword(password);

        if (!isMatched) {
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User logged in",
            data: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export {
    registerUser,
    loginUser
};