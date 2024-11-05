const Video = require('../Modals/video');

// add video in mongodb
exports.uploadVideo = async (req,res)=>{
    try{
        console.log(req.body)
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        const videoUpload=new Video({user:req.user._id,title, description, videoLink, videoType,thumbnail})
        await videoUpload.save();

        res.status(201).json({ sucess: "true", videoUpload });


    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

// get all video
exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        
        
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

// get a video by id 
exports.getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
        const video=await Video.findById(id).populate('user','channelName profilePic userName createdAt');
        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


// get all video by user id
exports.getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": video });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}