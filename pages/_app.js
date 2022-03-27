import '../styles/globals.scss';
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { theme } from '../theme/theme';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [spinner, toggleSpinner] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => toggleSpinner(true));
    router.events.on('routeChangeComplete', () => toggleSpinner(false));
    router.events.on('routeChangeError', () => toggleSpinner(false));

    return () => {
      router.events.off('routeChangeStart', () => toggleSpinner(true));
      router.events.off('routeChangeComplete', () => toggleSpinner(false));
      router.events.off('routeChangeError', () => toggleSpinner(false));
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spinner}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
