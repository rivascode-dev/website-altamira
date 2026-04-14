'use client';

import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFab() {
  return (
    <Tooltip title='Contactar por WhatsApp' placement='left'>
      <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
        <Fab
          component='a'
          href='https://wa.me/56997902704'
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            position: 'fixed',
            bottom: { xs: 24, md: 32 },
            right: { xs: 24, md: 32 },
            bgcolor: '#25D366',
            color: 'white',
            zIndex: 2000,
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.1) rotate(5deg)',
            },
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          aria-label='whatsapp'
        >
          <MessageCircle size={32} strokeWidth={2.5} />
        </Fab>
      </Zoom>
    </Tooltip>
  );
}
