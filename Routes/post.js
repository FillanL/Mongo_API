const express = require('express');
const router = express.Router()
const Post = require('../Models/Post')

router.get('/', (req, res)=>{
    res.send("im hereee in post fam")
})
router.post('/', async (req, res)=>{

    const post = new Post({
        "title": req.body.title,
        "content": req.body.content,
        "author": req.body.author
    }) 

    try {
        const savingPst = await post.save()
        res.json(savingPst)
    } catch (error) {
        res.json({"ErrorM ": error})
    }
})

module.exports = router