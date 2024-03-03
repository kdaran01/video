import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import './ChannelCard'
import './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { Typography } from '@mui/material'

const ChannelDetail = () => {
  const[channelDetail, setChannelDetail] = useState(null)
  const[videos,setVideos] = useState([])
  const { id} = useParams();

  console.log(channelDetail,videos)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(28,18,198,1) 0%, rgba(219,46,149,1) 35%, rgba(255,196,0,1) 100%)',
          zIndex:'10',height:'250px'
        }}>
          <div className='imggg'>
            <img src={channelDetail?.snippet?.thumbnails?.high?.url} height='160px' width='200px'/>
          </div>
        </div>
  
      </Box>
     
      <Typography variant='h6' sx={{color:'#29323c' , fontWeight:"bold", fontSize:'50px', textDecoration:'underline'}} align='center' >
            {channelDetail?.snippet?.title}
      </Typography>
      <Box display="flex" p="2" mt="15">
        <Box sx={{mr:{sm:'100px'}}} className="xxx"/>
          <Videos videos={videos} gap='6px'/>
      </Box>

    </Box>
  )
}

export default ChannelDetail