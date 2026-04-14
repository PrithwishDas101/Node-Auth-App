import { Router } from "express";
import mongoose, { Schema } from "mongoose";

const router = Router();

const postSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            Trim: true
        },

        description: {
            type: String,
            required: true,
            Trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 5,
            max: 200
        }
    },

    {
        timestamps: true
    }
)

export const Post = mongoose.model('Post', postSchema);