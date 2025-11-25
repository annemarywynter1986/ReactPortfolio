import React from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Footer from './footer/Footer';
import MyContactForm from './contact/MyContactForm.js';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { socials } from './footer/Footer';
import Resume from './resume/Resume';

function BaseLayout() {
  return (
    <Box className={Style.dark}>
      <Grid container display="flex" flexDirection="column" minHeight="100vh" justifyContent="space-between">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<MyContactForm />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box component="footer" display="flex" flexDirection="column" alignItems="center" py="1.5rem" sx={{ opacity: 0.7 }} width="100%" >
            {/* Included the Footer component here and pass the socials prop */}
            <Footer socials={socials} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BaseLayout;
