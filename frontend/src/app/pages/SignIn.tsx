import React, { useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {SignIn, SignUp} from '../components/login/SignInUp';

const SignInSignUp = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = React.useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  }

  useEffect(() => {
    if (location.state?.mode === 'signup') {
      setIsSignUp(true);
    }
  }, [location.state]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      color: 'black',
      bgcolor: 'grey.100',
      width: '100%',
    }}>
      <Paper elevation={2} sx={{
        padding: 4,
        paddingLeft: 6,
        paddingRight: 6,
        width: '300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        bgcolor: 'white',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 1,
        }}>
          <img src="/logo.jpg" alt="Beacons Logo"
            style={{width: 70, height: 70, borderRadius: 2, objectFit: 'cover', display: 'block'}} />
          <Typography variant='h3' sx={{fontWeight: '600'}}>Beacons</Typography>
        </Box>
        {isSignUp? <SignUp handleSwitch={handleSwitch}/>: <SignIn handleSwitch={handleSwitch}/>}
      </Paper>
    </Box>
  );
};

export default SignInSignUp;