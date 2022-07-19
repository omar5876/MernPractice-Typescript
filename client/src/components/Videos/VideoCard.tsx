import {Props} from '../../interfaces/interfaces'

const VideoCard = ({video}: Props) => {
    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
        </div>
    )
}

export default VideoCard