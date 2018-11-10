const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video')

mongoose.connect('mongodb://localhost/videoplayer', (err)=>{
    if(err){
        console.log(`error ${err}`);
    }
})

router.get('/videos', function(req,res){
    // res.send('Express api worked');
    console.log('Get Request for all videos');
    Video.find({})
    .exec((err,videos)=>{
        if(err){
            console.log('Error retriving videos');
        }else{
            res.json(videos);
        }
    })
});

router.get('/videos/:id', function(req,res){
    // res.send('Express api worked');
    console.log('Get Request for single Video');
    Video.findById(req.params.id)
    .exec((err,video)=>{
        if(err){
            console.log('Error retriving videos');
        }else{
            res.json(video);
        }
    })
});

module.exports = router;