//Create web Server
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

//Get All Comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

//Submit a Comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        comment: req.body.comment,g
