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

router.post('/videos', function(req,res){
    // res.send('Express api worked');
    console.log('Get Request for single Video');

    let newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save((err,video)=>{
        if(err){
            console.log('Error retriving videos');
        }else{
            res.json(video);
        }
    })
});

router.put('/videos/:id', function(req,res){
    // res.send('Express api worked');
    console.log('Get Request for single Video');

    Video.findByIdAndUpdate(
        req.params.id,
        {
            $set:{title: req.body.title, url: req.body.url, description: req.body.description}
        },
        {
            new: true
        },
        (err,video)=>{
        if(err){
            console.log('Error retriving videos');
        }else{
            res.json(video);
        }
    })
});

router.delete('/videos/:id', function(req,res){
    // res.send('Express api worked');
    console.log('Get Request for single Video');

    Video.findByIdAndRemove(
        req.params.id,
        (err,video)=>{
        if(err){
            console.log('Error retriving videos');
        }else{
            res.json(video);
        }
    })
});

module.exports = router;