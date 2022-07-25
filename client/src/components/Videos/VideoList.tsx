import s from '../../css/VideoList.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Ivideo } from "../../interfaces/interfaces"
import VideoCard from "./VideoCard"



const VideoList = () => {
    let [videos, setVideos] =  useState<Ivideo[]>([])
    console.log(videos)
    useEffect(() => {
        axios.get('http://localhost:5000/videos')
        .then(res => setVideos(res.data))

    }, [])
    return (
        <div className={s.videoCardsContainer}>
            {videos.map(video => {
                return (
                    <VideoCard key={video._id} video={video}/>
                )
            })}
        </div>
    )
}

export default VideoList