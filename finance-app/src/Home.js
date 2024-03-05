import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
// import LogoCollection from './components/LogoCollection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
// import Highlights from './components/Highlights';
// import Pricing from './components/Pricing';
// import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

const defaultTheme = createTheme({});

export default function Home({mode, toggleColorMode}) {
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline/>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero/>
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features/>
        <Divider/>
        <Testimonials/>
        <Divider/>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}