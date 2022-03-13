import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import SocialButton from '../SocialButtons/SocialButton';
import SocialButtonsContainer from '../SocialButtonsContainer';
import Logo from '../Logo';
import AppBarTitle from '../AppBarTitle';
import FightHomeCard from '../FightHomeCard';
import Link from 'next/link';
import { FightMobileNavigation } from '../FightMobileNavigation';
import { useRouter } from 'next/router';

const leftSocialList = ['facebook', 'instagram', 'twitter'];

const rightSocialList = ['youtube', 'twitch', 'telegram'];

function FightHomeHeader() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar
      className="shrink grow basis-2/12 py-4"
      elevation={4}
      position="relative"
    >
      <Toolbar disableGutters>
        <Grid container className="relative">
          {!isMobile && (
            <Grid item xs={2} alignItems="stretch" justifyContent="center">
              <SocialButtonsContainer
                socialList={leftSocialList}
                buttonLabel="chi siamo"
                buttonLink="/about"
              />
            </Grid>
          )}
          {isMobile && (
            <Grid
              item
              xs={12}
              className="relative flex items-center justify-center"
            >
              <Logo />
            </Grid>
          )}
          {!isMobile && (
            <Grid
              item
              xs={8}
              className="relative flex items-center justify-center"
            >
              <Logo />
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={2} alignItems="stretch" justifyContent="center">
              <SocialButtonsContainer
                socialList={rightSocialList}
                buttonLabel="manifesto"
                buttonLink="/manifest"
              />
            </Grid>
          )}
          {isMobile && (
            <Grid
              item
              xs={12}
              className="my-2 flex items-center justify-center"
            >
              {leftSocialList.concat(...rightSocialList).map((social) => (
                <SocialButton social={social} key={social} />
              ))}
            </Grid>
          )}
          <Grid item xs={12} textAlign="center">
            <AppBarTitle />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

function FightMainHeader(props) {
  return (
    <AppBar
      elevation={4}
      className="h-full w-full shrink grow basis-2/12 py-4"
      position="relative"
    >
      <Toolbar disableGutters>
        <Grid className="h-full w-full" container>
          <Grid item xs={4} className="relative">
            <Logo />
          </Grid>
          <Grid item xs={8} className="flex items-center justify-end">
            {leftSocialList.concat(...rightSocialList).map((social) => (
              <SocialButton social={social} key={social} />
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="center"
            className="flex items-center justify-center"
          >
            <AppBarTitle />
          </Grid>
          <Grid item xs={12}>
            <FightMobileNavigation />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

function FightHeader(props) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <>
      {isHome && <FightHomeHeader />}
      {!isHome && <FightMainHeader />}
    </>
  );
}

export default FightHeader;
