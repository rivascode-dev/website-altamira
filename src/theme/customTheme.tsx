'use client';

import { createTheme, alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';

//colores del website
// azul (primary): #003E54
// rojo (secondary): #D32F2F
// gris (tertiary): #546E7A

export const brand = {
  50: '#E6F0F4',
  100: '#C0D9E3',
  200: '#99BFD1',
  300: '#73A6C0',
  400: '#4D8CAE',
  500: '#003E54',
  600: '#003243',
  700: '#002533',
  800: '#001922',
  900: '#000C11',
};

export const secondary = {
  50: '#FBEAEA',
  100: '#F5CACA',
  200: '#EFA6A6',
  300: '#E98282',
  400: '#E35E5E',
  500: '#D32F2F',
  600: '#A92626',
  700: '#7F1C1C',
  800: '#541313',
  900: '#2A0909',
};

export const gray = {
  50: '#EEF1F2',
  100: '#D5DDE1',
  200: '#BBC8D0',
  300: '#A2B4BE',
  400: '#889FAD',
  500: '#546E7A',
  600: '#435862',
  700: '#324249',
  800: '#222C31',
  900: '#111618',
};

export const green = {
  50: '#F6FEF6',
  100: '#E3FBE3',
  200: '#C7F7C7',
  300: '#A1E8A1',
  400: '#51BC51',
  500: '#1F7A1F',
  600: '#136C13',
  700: '#0A470A',
  800: '#042F04',
  900: '#021D02',
};

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[800],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[100],
          light: brand[300],
          main: brand[400],
          dark: brand[800],
        }),
      },
      secondary: {
        light: secondary[300],
        main: secondary[500],
        dark: secondary[800],
        contrastText: '#fff',
        ...(mode === 'dark' && {
          light: secondary[400],
          main: secondary[500],
          dark: secondary[900],
          contrastText: '#fff',
        }),
      },
      warning: {
        main: '#F7B538',
        dark: '#F79F00',
      },
      error: {
        light: red[50],
        main: red[500],
        dark: red[700],
        ...(mode === 'dark' && {
          light: '#D32F2F',
          main: '#D32F2F',
          dark: '#B22A2A',
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
      background: {
        default: mode === 'dark' ? gray[900] : '#fff',
        paper: mode === 'dark' ? gray[800] : gray[50],
      },
      text: {
        primary: mode === 'dark' ? '#fff' : gray[800],
        secondary: mode === 'dark' ? gray[400] : gray[600],
      },
      action: {
        selected: alpha(brand[200], 0.2),
        ...(mode === 'dark' && {
          selected: alpha(brand[800], 0.2),
        }),
      },
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontSize: '6rem',
        fontWeight: 300,
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
        '@media (max-width:900px)': {
          fontSize: '4.5rem',
        },
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '3.75rem',
        fontWeight: 300,
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
        '@media (max-width:900px)': {
          fontSize: '3rem',
        },
        '@media (max-width:600px)': {
          fontSize: '2.25rem',
        },
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: '0em',
        '@media (max-width:900px)': {
          fontSize: '2.5rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontSize: '2.125rem',
        fontWeight: 400,
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
        '@media (max-width:900px)': {
          fontSize: '1.75rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: 1.334,
        letterSpacing: '0em',
        '@media (max-width:600px)': {
          fontSize: '1.25rem',
        },
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        '@media (max-width:600px)': {
          fontSize: '1.125rem',
        },
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
      overline: {
        fontSize: '0.85rem',
        fontWeight: 700,
        lineHeight: 2.66,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
      },
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
        styleOverrides: {
          root: {
            paddingLeft: 24,
            paddingRight: 24,
            '@media (max-width:600px)': {
              paddingLeft: 20,
              paddingRight: 20,
            },
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 20px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor:
              theme.palette.mode === 'dark' ? alpha(gray[800], 0.6) : '#fff',
            backgroundImage: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: `0 12px 24px ${alpha(brand[800], 0.15)}`,
              borderColor: brand[700],
            },
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {},
      },
    },
  });

export default getTheme;
