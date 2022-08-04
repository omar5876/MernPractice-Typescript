import {Props} from '../../interfaces/interfaces'
import s from '../../css/VideoCard.module.css'
import ReactPlayer from 'react-player'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const VideoCard = ({video}: Props) => {
    let navigate = useNavigate()

    const clickToUpdate = ():void => {
        navigate(`update/${video._id}`)
    }

    const deleteVideo = () => {
        axios.delete(`http://localhost:5000/videos/${video._id}`)
        .then(res => {
            navigate('/')
            window.location.reload()
            toast.success('Video has been deleted')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className={s.videoCardContainer} >
            <button onClick={deleteVideo}>Delete</button>
            <h1 onClick={clickToUpdate}>{video.title}</h1>
            <div className={s.videoCardUrlContainer}>
            <ReactPlayer url={video.url} width='100%'/>
            </div>
            <p>{video.description}</p>
        </div>
    )
}

export default VideoCard