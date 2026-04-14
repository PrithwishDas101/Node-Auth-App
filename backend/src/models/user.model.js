import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 3,
            maxLength: 25,
            match: /^[a-z0-9_]+$/
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },

        password: {
            type: String,
            required: true,
            minLength: 6
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);