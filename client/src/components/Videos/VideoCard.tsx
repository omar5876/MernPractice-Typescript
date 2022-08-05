import {Props} from '../../interfaces/interfaces'
import s from '../../css/VideoCard.module.css'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const VideoCard = ({video, setFlag, flag}: Props) => {
    let navigate = useNavigate()

    const clickToUpdate = ():void => {
        navigate(`update/${video._id}`)
    }

    const deleteVideo = () => {
        axios.delete(`http://localhost:5000/videos/${video._id}`)
        .then(res => {
            navigate('/')
            setFlag(!flag)
            toast.success('Video has been deleted')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className={s.videoCardContainer} >
            <button onClick={deleteVideo}>Delete</button>
            <h1 onClick={clickToUpdate}>{video.title}</h1>
            <div className={s.videoCardUrlContainer}>
            <ReactPlayer url={video.url} width='100%' height={'200px'}/>
            </div>
            <p>{video.description}</p>
        </div>
    )
}

export default VideoCard