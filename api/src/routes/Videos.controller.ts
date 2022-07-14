import {Request, Response} from 'express';
import Video from './Video'


export const getVideos = async (req: Request, res: Response)=> {
    try {
        let allVideos = await Video.find()
        res.json(allVideos)
    } catch (error) {
        console.log(error)
        res.json('Not found any videos')
        
    }
}

export const getVideo = async(req: Request, res: Response) => {
    try {
        let videoFound = await Video.findById(req.params.id)
        console.log(videoFound)
        return res.json(videoFound)
    } catch (error) {
        console.log(error)
        res.json('Video not found')
    }
}

export const createVideo = async (req: Request, res: Response) => {
    try {
        let videoFound = await Video.findOne({url: req.body.url})
        
        if(videoFound) return res.send('Video already exist')
        else {

            let video = new Video(req.body)
            let savedVideo = await video.save()
            res.send(savedVideo)
        }
    } catch (error) {
        res.send(error)
    }
}

export const updateVideo = async(req: Request, res: Response) => {
    try {
        let videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(videoUpdated)
        res.json(videoUpdated)
    } catch (error) {
        console.log(error)
        res.json("It wasn't updated")
    }
}

export const deleteVideo = async(req: Request, res: Response) => {
    try {
        let deleteVideo = await Video.findByIdAndDelete(req.params.id)
        res.json(deleteVideo)
    } catch (error) {
        console.log(error)
        return res.json('Video to deleted not found')
    }
}