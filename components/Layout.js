import FightHeader from './Header/FightHeader';
import FightFooter from './Footer/FightFooter';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';

export function HomeLayout({ children }) {
  return <main>{children}</main>;
}

export function MainLayout({ children }) {}
