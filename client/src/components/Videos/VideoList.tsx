import s from '../../css/VideoList.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Ivideo } from "../../interfaces/interfaces"
import VideoCard from "./VideoCard"



const VideoList = () => {
    let [videos, setVideos] =  useState<Ivideo[]>([])
    let [flag, setFlag] = useState<boolean>(false)
    console.log(videos)
    useEffect(() => {
        axios.get('http://localhost:5000/videos')
        .then(res => setVideos(res.data))

    }, [flag])
    return (
        <div className={s.videoCardsContainer}>
            {videos.map(video => {
                return (
                    <VideoCard key={video._id} video={video} setFlag={setFlag} flag={flag}/>
                )
            })}
        </div>
    )
}

export default VideoList