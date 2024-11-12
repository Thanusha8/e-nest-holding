import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assets/logo.png";

import {
    Box,
    Drawer,
    Icon,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
}from '@mui/material';

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {

    const[openMenu,setOpenMenu] =useState(false);
    const menuOptions=[
        {
            text:"Home",
            target: '#Home',
            Icon:<HomeIcon/>
        },
        {
            text:"About",
            target: '#About',
            Icon:<InfoIcon/>
        },
        {
            text:"projects",
            target: '#projects',
            Icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            target: '#Contact',
            Icon:<PhoneRoundedIcon/>
        } ,
  
    ];
    
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={logo} alt="company logo"></img>
        </div>
        <div className='navbar-links-container'>
            <a href='#Home'>Home</a>
            <a href='#About'>About</a> 
            <a href='#projects'>Projects</a>
            <a href='#Contact'>Contact</a>
 
           <a href='mailto:enestholdingscogmail.com'> <button className='primary-button'>Send Inquiry</button> </a>
        </div>

        <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=>setOpenMenu(true)} />                    
        </div>
   
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">     {/*The code creates a right-side sliding drawer that opens when openMenu is true and closes when the user triggers the onClose event. */}
        <Box  
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}               //onKeyDown: Event triggered when a key is pressed down.
        >
          <List>
            {menuOptions.map((item) => (
               <a href={item.target}>
                 <ListItem key={item.text} disablePadding>
                   <ListItemButton >
                     <ListItemIcon>{item.Icon}</ListItemIcon>
                     <ListItemText primary={item.text} />
                   </ListItemButton> 
                  </ListItem>
               </a>
  
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>


    </nav>
  )
}

export default Navbar
