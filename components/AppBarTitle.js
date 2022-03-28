import { useContext } from 'react';

import { IconButton, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft';
import { IoMenu } from '@react-icons/all-files/io5/IoMenu';
import { FightDrawerContext } from './Drawer/FightDrawerContext';
import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';

function AppBarTitle() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const router = useRouter();
  const isSecondLevelRoute = router.route.split('/').length > 2;
  const { open, toggleOpen } = useContext(FightDrawerContext);
  return (
    <div className="absolute top-[210px] left-[18%]">
      {isSecondLevelRoute && (
        <IconButton onClick={() => router.back()}>
          <HiOutlineChevronLeft />
        </IconButton>
      )}
      <Typography
        className="mx-auto"
        typography="h3"
        letterSpacing={[8, 40]}
        color="primary"
      >
        &nbsp;&nbsp;DREAMER & VISIONARY
      </Typography>
      {isMobile && (
        <IconButton onClick={() => toggleOpen(!open)}>
          <IoMenu />
        </IconButton>
      )}
    </div>
  );
}

export default AppBarTitle;
