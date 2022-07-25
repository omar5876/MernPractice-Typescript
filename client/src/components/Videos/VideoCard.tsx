import {Props} from '../../interfaces/interfaces'
import s from '../../css/VideoCard.module.css'
import ReactPlayer from 'react-player'

const VideoCard = ({video}: Props) => {
    return (
        <div className={s.videoCardContainer}>
            <h1>{video.title}</h1>
            <div className={s.videoCardUrlContainer}>
            <ReactPlayer url={video.url} width='100%'/>
            </div>
            <p>{video.description}</p>
        </div>
    )
}

export default VideoCard