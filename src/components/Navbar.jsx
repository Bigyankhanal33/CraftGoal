// src/components/Navbar.jsx
import React from 'react';
import cglogo from '../assets/cglogo.png'; // Ensure the file exists in the specified path
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import Button from '@mui/material/Button';



export default function Navbar() {
  return (
    <Box>
      <Box
        component="nav" 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '0.1px solid', 
          fontFamily: 'Roboto', 
          padding: '10px 20px', 
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={cglogo}
            alt="CraftGoal Logo"
            width={140}
            height={40}
            style={{ marginRight: '10px' }}
          />
          
        

        </Box>
        <Box sx = {{
          display:'flex',
          justifyContent:'center',
          gap:'30px',
          '@media (max-width: 600px)': {
              marginLeft: 'auto', // Ensure alignment for smaller screens
            },
        }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/service" style={{ color: 'black', textDecoration: 'none' }}>
          Service
        </Link>
        <Link to="/works" style={{ color: 'black', textDecoration: 'none' }}>
          Works
        </Link>
        <Link to="/Contactus" style={{ color: 'black', textDecoration: 'none' }}>
          Contact Us
        </Link>
        </Box>
        <Box sx={{
          color:'black',
          '@media (max-width: 600px)': {
                fontSize: '12px',
                padding: '5px 10px',
              },
        }}>
        <Button variant="contained">Book Now</Button>
        </Box>
      </Box>
    </Box>
  );
}
