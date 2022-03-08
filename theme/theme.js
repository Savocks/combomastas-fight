import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffc517',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#212121',
    },
  },
  typography: {
    fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1.3rem',
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    overline: {
      fontFamily: '"Smooch Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '0.8rem',
    },
    body1: {
      fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    Footer: {
      defaultProps: {
        height: '100%',
      },
    },
  },
});
