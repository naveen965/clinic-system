import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import getLPTheme from '../getLPTheme';

const defaultTheme = createTheme();

function ForgotPassword() {
  const location = useLocation();
  const themeMode = location?.state?.themeMode;
  const LPtheme = createTheme(getLPTheme(themeMode));

  return (
    <ThemeProvider theme={LPtheme != null ? LPtheme : defaultTheme}>
      <div>ForgotPassword</div>
    </ThemeProvider>
  )
}

export default ForgotPassword