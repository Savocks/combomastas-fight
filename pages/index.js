import { Box, Button, Paper, styled } from '@mui/material';
import Image from 'next/image';
import HomeSocialButton from '../components/HomeSocialButton/HomeSocialButton';
import SiteSlogan from '../components/SiteSlogan/SiteSlogan';
import FightDrawer from '../components/Drawer/FightDrawer';

import styles from '../styles/components/Home.module.scss';
import { useDrawer } from '../context/DrawerContext';

const HomeContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '100px auto 100px',
  gridRowGap: '1em',
  [theme.breakpoints.up('sm')]: {
    gridTemplateRows: '150px auto 100px',
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
  const { state, dispatch } = useDrawer();
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
        <div className={styles.header__logoContainer}>
          <Image
            src={'/images/fight.png'}
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
        <div className={styles.header__buttonContainer}>
          <HomeSocialButton
            socialList={['youtube', 'twitch', 'telegram']}
            buttonHref="/about"
            buttonLabel="chi siamo"
            mobileButton="manifest"
          />
        </div>
      </HomeHeader>
      <HomeNavigationWrapper>
        <SiteSlogan />
        <HomeNavigation>
          <Button className="item" component="a" variant="contained">
            Studio
          </Button>
          <Button className="item" component="a" variant="contained">
            #71417 MNGMNT
          </Button>
          <Button className="item" component="a" variant="contained">
            MERCH & WEAR
          </Button>
          <Button className="item" component="a" variant="contained">
            EVENTI
          </Button>
          <Button className="item" component="a" variant="contained">
            LABEL
          </Button>
        </HomeNavigation>
      </HomeNavigationWrapper>
      <Paper elevation={8}>footer</Paper>
    </HomeContainer>
  );
}
