import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image';

const MainHeader = () => {
  return (
    <Toolbar
      sx={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}
    >
      <Image src="/images/fight.png" height={150} width={350} alt="FIGHT" />
    </Toolbar>
  );
};

const SecondaryHeader = () => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Image src="/images/fight.png" height={100} width={200} alt="FIGHT" />
    </Toolbar>
  );
};

export default function FightHeader({ isHome }) {
  return (
    <AppBar
      position="relative"
      elevation={0}
      square
      className="row-span-1 h-full"
    >
      {isHome && <MainHeader />}
      {!isHome && <SecondaryHeader />}
    </AppBar>
  );
}
