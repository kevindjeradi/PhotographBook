// src/App.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Gallery from 'components/Gallery';
import 'styles/App.css'

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default" elevation style={{backgroundColor:'white'}}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" style={{cursor:'default', fontWeight:'bold', fontFamily: "'Arial', sans-serif !important"}}>
            Gallerie ATH
          </Typography>
          <div>
          <IconButton className='header-contact-button' color='inherit' style={{ fontSize: '1rem', color: 'dimgray'}}>
            Contact
          </IconButton>
            <IconButton color="inherit">
                <InstagramIcon fontSize="medium" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <Gallery />
      </main>
    </div>
  );
}
export default App;