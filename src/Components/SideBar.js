import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/Constants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {
    
  return (
   <Stack direction="row" sx={{overflowY:"auto", height:{sx:'auto',md:'95%'}, flexDirection:{md:'column'}, pr:3}}>
    {categories.map((category)=>(
        <button className='category-btn' style={{background:category.name === selectedCategory && '#001858',color:'white'}}
        key={category.name} onClick={() => setSelectedCategory(category.name)}
        >
            <span style={{color: category.name === selectedCategory ? 'white' :'#001858', marginRight:'15px'}}>
                {category.icon}
            </span>
            <span  style={{color: category.name === selectedCategory ? 'white' :'#29323c', marginRight:'15px'}}>{category.name}</span>
        </button>
    ))
    }

   </Stack>
  )
}

export default SideBar