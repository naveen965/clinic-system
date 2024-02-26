import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { 
  Avatar, 
  Button, 
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Validation from '../validation/LoginValidation';import getLPTheme from './getLPTheme';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href="https://mui.com/">
        Naveen Rajasekara
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const defaultTheme = createTheme();

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({

  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setErrors(Validation(values));
  }

  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, becolor: 'secondary.main'}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={handleInput}
              error={errors.email}
            />
            {errors.email && <span style={{ color: 'red' }}> {errors.email} </span>}
            <TextField
              margin='normal'
              required
              fullWidth
              id='password'
              label='Password'
              name='password'
              type='password'
              autoComplete='current-password'
              onChange={handleInput}
              error={errors.password}
            />
            <Grid container>
              <Grid item xs>
                {errors.email && <span style={{ color: 'red' }}> {errors.email} </span>}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary'/>}
                  label="Remember me"
                />
              </Grid>
            </Grid>

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }}/>
      </Container>
    </ThemeProvider>
  )
}