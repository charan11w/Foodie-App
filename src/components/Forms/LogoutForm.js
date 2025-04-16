import { Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const LogoutForm = ({ onClose,closeAll }) => {

  const handleLogout = () => {
    onClose();
    closeAll();
  };

  const handleClosingModel=() => {
    closeAll();
  }

  return (
    <Box
      sx={{
        width: 400,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 5,
        p: 4,
        position: 'relative',
        mx: 'auto',
        mt: 10,
      }}
    >
      {/* Close Icon */}
      <IconButton
        onClick={closeAll}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Logout Confirmation */}
      <Typography variant="h6" align="center" gutterBottom>
        Are you sure you want to logout?
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="outlined" onClick={handleClosingModel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default LogoutForm;
