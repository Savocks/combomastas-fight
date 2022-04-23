import FightHeader from '../Header/FightHeader';
import FightFooter from '../Footer/FightFooter';
import { Box } from '@mui/material';
import { useState } from 'react';
import FightDrawer from '../Drawer/FightDrawer';

function MainLayout({ children }) {
  const [open, toggleOpen] = useState(false);

  return (
    <Box className="flex h-screen w-full flex-col">
      <FightHeader />
      <FightDrawer drawerState={{ open, toggleOpen }} />
      <main className="relative h-full w-full shrink grow basis-8/12">
        {children}
      </main>
      <FightFooter />
    </Box>
  );
}

export default MainLayout;
