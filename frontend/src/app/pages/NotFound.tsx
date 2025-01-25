import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Box textAlign="center" mt={10}>
        <Typography variant="h1" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" component="p">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;