import FightHeader from './Header/FightHeader';
import FightFooter from './Footer/FightFooter';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box className="flex h-screen flex-col">
      <FightHeader />
      <main className="relative h-full shrink grow basis-8/12">{children}</main>
      <FightFooter />
    </Box>
  );
}

export default Layout;
