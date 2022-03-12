import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';

export default function FightFooter({ children }) {
  return (
    <AppBar
      elevation={4}
      component="footer"
      position="relative"
      className="shrink grow basis-2/12"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        <Box className="grid w-full grid-cols-12 place-items-center">
          <Button
            className="col-span-2 w-full"
            component="a"
            color="primary"
            variant="contained"
          >
            Sostienici
          </Button>
          <Box className="col-span-8 text-center">
            <Typography typography="caption">
              &copy; RIGHT COMBO MASTAS' ENTERTAINMENT
            </Typography>
            <Typography typography="caption">
              POWERED BY COMBOSTUDIO.IT
            </Typography>
          </Box>
          <Button
            className="col-span-2  w-full"
            component="a"
            color="primary"
            variant="contained"
          >
            Iscriviti
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
