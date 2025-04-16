import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Checkout from '../pages/Checkout';

const CheckoutModal = ({ open, onClose, children }) => {
  return (
   <>
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          width: 400,
          height: '100vh',
          bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          zIndex: 1300,
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        {/* Close Icon */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1400,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Content */}
        <Box sx={{ paddingTop: 4 }}>
          {children}
        </Box>
        <Checkout />
      </Box>
    </Modal>
   </>
  );
};

export default CheckoutModal;
