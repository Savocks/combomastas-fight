import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/components/Home.module.scss';
import HomeSocialButton from '../components/HomeSocialButton/HomeSocialButton';
import SiteSlogan from '../components/SiteSlogan/SiteSlogan';

export default function Index() {
  return (
    <Box className={styles.homeContainer}>
      <Paper className={styles.header} elevation={4}>
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
      </Paper>
      <Box className={styles.homePageNavigation}>
        <SiteSlogan />
        <div className={styles.homePageNavigation__navigationMenu}>
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
        </div>
      </Box>
    </Box>
  );
}
