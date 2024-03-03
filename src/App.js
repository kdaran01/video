
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import NavBar from './Components/NavBar';
import Feed from './Components/Feed';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail';
import SearchFeed from './Components/SearchFeed';

function App() {
  return (
   <BrowserRouter>
    <Box sx={{backgroundColor:'#fef6f4'}}>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
   </BrowserRouter>
  );
}

export default App;
