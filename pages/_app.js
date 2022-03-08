import '../styles/globals.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
