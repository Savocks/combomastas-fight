import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function FightFooter({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {!isMobile && isHome && (
        <AppBar
          elevation={4}
          component="footer"
          position="relative"
          className="shrink grow basis-2/12"
          sx={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar disableGutters className="w-full px-14">
            <Grid container>
              <Grid item xs={2} className="flex items-center justify-start">
                <Button
                  component="a"
                  color="primary"
                  variant="contained"
                  className="w-full"
                >
                  Sostienici
                </Button>
              </Grid>
              <Grid item xs={8} textAlign="center">
                <Typography typography="caption">
                  &copy; RIGHT COMBO MASTAS' ENTERTAINMENT
                </Typography>
                <Typography typography="caption">
                  POWERED BY COMBOSTUDIO.IT
                </Typography>
              </Grid>
              <Grid item xs={2} className="flex items-center justify-end">
                <Button
                  component="a"
                  color="primary"
                  variant="contained"
                  className="w-full"
                >
                  Iscriviti
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
