import React from 'react'
import { Box,CardContent,  Typography, colors } from '@mui/material'
import {CardMedia} from '@mui/material'
import { CheckCircle, Height } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{boxShadow:'none', borderRadius:'20px',display:'flex', justifyContent:'center', alignItems:'center',
    width:{xs:'356px', md:"320px"}, height:'160px', margin:'auto', marginTop}}
    >
      <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'black'}}>
         {/*  <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%',height:'160' , width:'180', mb:'2', border:'1px solid #e3e3e3', color:'brown'}}
          /> */}
          <div className='imggg'>
            <img src={channelDetail?.snippet?.thumbnails?.high?.url} height='160px' width='200px' border-radius='50%' />
          </div>
         { <Typography variant='h6' sx={{color:'#29323c'}}>
            {channelDetail?.snippet?.title}
            
          </Typography>}
        </CardContent>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography align='center'>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </Link>

    </Box>
  )
}

export default ChannelCard