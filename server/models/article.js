const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        body: {
            type: String,
            trim: true,
            required: true
        },
        cover: {
            type: Buffer
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        likes: {
            type: Number,
            default: 0
        },
        likedBy:  [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
