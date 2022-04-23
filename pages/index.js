import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import HomeSocialButton from '../components/HomeSocialButton/HomeSocialButton';
import SiteSlogan from '../components/SiteSlogan/SiteSlogan';
import Link from 'next/link';

import styles from '../styles/components/Home.module.scss';
import { useEffect } from 'react';

const HomeContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '100px auto',
  gridRowGap: '1em',
  [theme.breakpoints.up('sm')]: {
    gridTemplateRows: '150px auto',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateRows: '250px auto 150px',
  },
}));

const HomeHeader = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  padding: '0 1.5em',
  gridTemplateColumns: '50px auto 50px',
  gridColumnGap: '.5em',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '125px auto 125px',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '150px auto 150px',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '200px auto 200px',
  },
}));

const HomeFooter = styled(Paper)(({ theme }) => ({
  padding: '0 1.5em',
  display: 'grid',
  gridTemplateColumns: '150px auto 150px',
  alignItems: 'center',
  justifyItems: 'stretch',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '200px auto 200px',
  },
}));

const HomeNavigationWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridRowGap: '1em',
  placeItems: 'stretch',
  gridTemplateRows: '50px auto',
}));

const HomeNavigation = styled(Box)(({ theme }) => ({
  padding: '0 1.5em',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1em',
  placeItems: 'stretch',
  paddingBottom: '1.5em',
  'a:last-child': {
    transform: 'translateX(50%)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5em',
    gridTemplateColumns: 'repeat(5, 1fr)',
    'a:last-child': {
      transform: 'none',
    },
  },
}));

export default function Index() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  useEffect(() => {});
  return (
    <HomeContainer>
      <HomeHeader elevation={8}>
        <div className={styles.header__buttonContainer}>
          <HomeSocialButton
            socialList={['facebook', 'instagram', 'twitter']}
            buttonHref="/about"
            buttonLabel="chi siamo"
            mobileButton="aboutUs"
          />
        </div>
        <Link href="/" passHref>
          <a className={styles.header__logoContainer}>
            <Image
              src={'/images/fight.png'}
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </a>
        </Link>
        <div className={styles.header__buttonContainer}>
          <HomeSocialButton
            socialList={['youtube', 'twitch', 'telegram']}
            buttonHref="/about"
            buttonLabel="manifesto"
            mobileButton="manifest"
          />
        </div>
      </HomeHeader>
      <HomeNavigationWrapper>
        <SiteSlogan />
        <HomeNavigation>
          <Link href="/studio" passHref>
            <Button className="item" component="a" variant="contained">
              Studio
            </Button>
          </Link>
          <Link href="/roaster" passHref>
            <Button className="item" component="a" variant="contained">
              #71417 MNGMNT
            </Button>
          </Link>
          <Link href="/merchandising" passHref>
            <Button className="item" component="a" variant="contained">
              MERCH & WEAR
            </Button>
          </Link>
          <Link href="/events" passHref>
            <Button className="item" component="a" variant="contained">
              EVENTI
            </Button>
          </Link>
          <Link href="/label" passHref>
            <Button className="item" component="a" variant="contained">
              LABEL
            </Button>
          </Link>
        </HomeNavigation>
      </HomeNavigationWrapper>
      {!isTablet && (
        <HomeFooter elevation={8}>
          <Button component="a" variant="contained">
            sostienici
          </Button>
          <Box className="flex w-full flex-col items-center justify-center text-center">
            <Typography>
              &copy; RIGHT COMBO MASTAS&apos; ENTERTAINMENT
            </Typography>
            <Typography>POWERED BY COMBOSTUDIO.IT</Typography>
          </Box>
          <Button component="a" variant="contained">
            iscriviti
          </Button>
        </HomeFooter>
      )}
    </HomeContainer>
  );
}
