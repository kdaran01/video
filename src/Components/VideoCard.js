import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import { demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from '../utils/Constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  console.log(videoId,snippet)
  return (
    <div>
      <div className="movie">
        <div >
          <Card>
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
              <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:358, height:160}}/>
          
            </Link>
          </Card>
        </div>
        <br></br>
        <div className='movie1'>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
          <span className='movie2'> {snippet?.title.slice(0,30) || demoVideoTitle.slice(0,60)}</span>
        </Link>

        </div>
        
        <div>
        <Link to={snippet.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
          <span className='movie3'>{snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}</span>
          <CheckCircle sx={{fontSize: 12, color:'grey', ml:'5px'}}/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoCard