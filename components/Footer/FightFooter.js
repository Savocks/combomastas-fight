import { AppBar, Toolbar } from '@mui/material';

export default function FightFooter({ children }) {
  return (
    <AppBar
      elevation={0}
      component="footer"
      position="relative"
      color="primary"
      className="row-span-1 h-full"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar
        sx={(theme) => ({
          height: theme.components.Footer.defaultProps.height,
        })}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}
