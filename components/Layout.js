import FightHeader from './Header/FightHeader';
import FightFooter from './Footer/FightFooter';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <div className="relative grid h-screen w-full grid-cols-1 grid-rows-6 place-content-center place-items-center">
      <FightHeader isHome={isHome} />
      <Paper
        elevation={0}
        className="row-span-4 h-full w-full "
        component="main"
        square
      >
        {children}
      </Paper>
      <FightFooter>Il mio footer</FightFooter>
    </div>
  );
}
