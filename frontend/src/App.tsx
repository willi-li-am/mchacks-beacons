import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './app/pages/NotFound';
import SignInSignUp from './app/pages/SignIn';
import { Box } from '@mui/material';
import { Profile } from './app/pages/Profile';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%', minHeight: '100vh' }}>
      <Routes>
      <Route path="/" element={<></>} />
      <Route path="/home" element={<></>} />
      <Route path="/user/:user_id" element={<Profile/>} />
      <Route path="/join" element={<SignInSignUp/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </Box>
  );
}

export default App;
