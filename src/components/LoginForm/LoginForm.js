import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux-toolkit/Reducers/AuthSlice';

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  const [userDetails, setuserDetails] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    const { password, email } = userDetails;
    if (password && email) {
      dispatch(login({ user: userDetails, isAuthenticated: true }));
      onClose();
    } else {
      console.log("Email or password is missing");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box
      sx={{
        width: 400,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 5,
        p: 4,
        position: 'relative',
        mx: 'auto', // horizontally center
        mt: 10, // margin from top
      }}
    >
      {/* Close Icon */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Login Form */}
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
