const express = require("express");
const multer = require("multer");
const sharp = require('sharp');

const Article = require("../models/article");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();
const upload = multer({
    limits: {
        fileSize: 1000000  // Roughly 1 MegaByte
    },
    fileFilter(res, file, cb)  {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/))
            return cb(new Error("Only Images Allowed!!"));
        return cb(undefined, true);
    }
});

// Create a new Article
router.post("/articles", auth, async (req, res) => {
    const article = new Article({
        ...req.body,
        author: req.user._id
    });

    try {
        await article.save();
        res.status(201).send(article);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Upload/Update an cover pic for an Article
router.post("/articles/:id/cover", auth, upload.single('cover'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer();
    const article = await Article.findOne({_id: req.params.id, author: req.user._id});
    
    if (!article)
        return res.status(404);

    article.cover = buffer;
    await article.save();
    res.send();

}, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});

// Fetch an Article's Cover
router.get("/articles/:id/cover", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article || !article.cover)
            throw new Error();

        res.set("Content-Type", "image/jpg");
        res.send(article.cover);
    } catch (e) {
        res.status(404).send();
    }
})

// List all the Articles of a user
// GET /articles/?completed
// GET /articles/?limit&skip
// GET /articles/?sortBy=*field*_*order(asc or desc)*
router.get("/articles", auth, async (req, res) => {
    const match = {};
    const sort = {};

    if (req.query.completed) match.completed = req.query.completed === "true";

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split("_");
        sort[parts[0]] = parts[1] === "asc" ? 1 : -1;
    }

    try {
        let articles = await Article.find({ author: req.user._id });
        for (let i=0; i<articles.length; i++) {
            articles[i]["author"] = req.user;
        }
        // await req.user
        //     .populate({
        //         path: "articles",
        //         match,
        //         options: {
        //             limit: parseInt(req.query.limit),
        //             skip: parseInt(req.query.skip),
        //             sort
        //         }
        //     })
        //     .execPopulate();
        res.status(200).send(articles);
    } catch (err) {
        res.status(500).send(err);
    }
});


// List all the Articles
// GET /articles/?completed
// GET /articles/?limit&skip
// GET /articles/?sortBy=*field*_*order(asc or desc)*
router.get("/articles/all", async (req, res) => {
    const match = {};
    const sort = {};

    if (req.query.completed) match.completed = req.query.completed === "true";

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split("_");
        sort[parts[0]] = parts[1] === "asc" ? 1 : -1;
    }

    try {
        let articles = await Article.find({});
        for (let i=0; i<articles.length; i++) {
            const user = await User.find({ _id: articles[i].author });
            articles[i]["author"] = user[0];
        }
        // await req.user
        //     .populate({
        //         path: "articles",
        //         match,
        //         options: {
        //             limit: parseInt(req.query.limit),
        //             skip: parseInt(req.query.skip),
        //             sort
        //         }
        //     })
       //     .execPopulate();
        res.status(200).send(articles);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


// Query a single Article
router.get("/articles/:id", async (req, res) => {
    const _id = req.params.id;
    const user_id = req.body.user_id;

    try {
        let article = await Article.findOne({ _id });
        const user = await User.find({ _id: article.author });
        article["author"] = user[0];
        // console.log(article);

        if (!article) res.status(404).send();

        res.status(200).send(article);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a Single Article
router.patch("/articles/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const validUpdates = ["title", "body"];
    const isValidOperation = updates.every(update =>
        validUpdates.includes(update)
    );

    if (!isValidOperation)
        return res.status(400).send({ error: "Invalid Updates" });

    try {
        const article = await Article.findOne({
            _id: req.params.id,
            author: req.user._id
        });

        if (!article) return res.status(404).send();

        updates.forEach(update => (article[update] = req.body[update]));

        article.save();

        res.status(200).send(article);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Increment Likes
router.patch("/articles/:id/like", auth, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        
        let present = false;
        for (let i=0; i<article.likedBy.length; i++) {
            if (String(article.likedBy[i].user) === String(req.user._id)) {
                article.likedBy.splice(i, 1);
                present = true;
                break;
            }
        }

        if (present) {
            article.likes -= 1;
        } else {
            article.likes += 1;
            article.likedBy = article.likedBy.concat({ user: req.user._id });
        }

        article.save()

        res.status(200).send({ newCount: article.likes, isLiked: !present });

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

// Delete a Article
router.delete("/articles/:id", auth, async (req, res) => {
    try {
        const article = await Article.findOneAndDelete({
            _id: req.params.id,
            author: req.user._id
        });

        if (!article) return res.status(404).send();

        res.status(200).send(article);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
