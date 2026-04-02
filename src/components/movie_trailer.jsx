import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function ModalTrailer({ url, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          maxWidth: 900,
          bgcolor: 'black',
          borderRadius: 2,
          overflow: 'hidden',
          outline: 'none',
        }}
      >
        <iframe
          src={url}
          title="Movie Trailer"
          width="100%"
          height="500"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none' }}
        />

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 14,
            background: 'rgba(0,0,0,0.6)',
            border: 'none',
            color: '#fff',
            fontSize: 20,
            cursor: 'pointer',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>
      </Box>
    </Modal>
  );
}

ModalTrailer.propTypes = {
  url: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};