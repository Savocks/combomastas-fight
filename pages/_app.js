import '../styles/globals.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import { DrawerProvider, useDrawer } from '../context/DrawerContext';
import 'normalize.css';
import FightDrawer from '../components/Drawer/FightDrawer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerProvider>
        <FightDrawer />
        <Component {...pageProps} />
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default MyApp;
