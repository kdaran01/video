import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const {id} = useParams();
  const[videoDetail,setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
  },[id])

  if(!videoDetail?.snippet) return 'Loading...'


  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography variant='h5' fontWeight='bold' p={2} color='#001858'>
              {videoDetail.snippet.title}
            </Typography> 
            <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{sm:'subtitle', md:'h5'}} color="#000" fontFamily='cursive'>
                  {videoDetail.snippet.channelTitle}
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap='20px'>
                <Typography variant='body1' sx={{opacity:0.7, color:'#000'}}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7, color:'#000'}}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
      </Stack>
 

    </Box>
  )
}

export default VideoDetail