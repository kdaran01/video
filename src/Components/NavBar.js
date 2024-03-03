import React from 'react'
import SearchBar from './SearchBar'
import { Stack, Typography } from '@mui/material'
import {Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

import {logo} from '../utils/Constants'

const NavBar = () => {
  return(
    <Stack 
    direction="row" 
    alignContent="center" 
    p={2} 
    sx={{position:'sticky', backgroundColor:'', top:0, justifyContent:'center'}}
   >

   
    <SearchBar />
   </Stack>
  )


}

export default NavBar