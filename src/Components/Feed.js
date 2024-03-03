import {useState,useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const[videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #f2f5f9', px:{sx:0,md:2}}}>
        <SideBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        
      </Box>
      
      <Box p={2}  sx={{overflow:'auto',height:{sx:'auto',md:'92vh'} , flex:2 }}>
       <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'#29323c'}}>
          {selectedCategory} <span style={{color:'#001858'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />

      </Box >  
    </Stack>
  )
}

export default Feed