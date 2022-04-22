import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import SocialButton from '../SocialButtons/SocialButton';
import SocialButtonsContainer from '../SocialButtonsContainer';
import Logo from '../Logo';
import AppBarTitle from '../AppBarTitle';
import { FightMobileNavigation } from '../FightMobileNavigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdGroup } from '@react-icons/all-files/md/MdGroup';
import { IoDocument } from '@react-icons/all-files/io5/IoDocument';
import { IoMenu } from '@react-icons/all-files/io5/IoMenu';
import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft';
import { useContext } from 'react';
import { FightDrawerContext } from '../Drawer/FightDrawerContext';
const leftSocialList = ['facebook', 'instagram', 'twitter'];

const rightSocialList = ['youtube', 'twitch', 'telegram'];

function FightHomeHeader() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { open, toggleOpen } = useContext(FightDrawerContext);
  return (
    <>
      <AppBar
        className="w-screen shrink grow basis-2/12 py-4"
        elevation={4}
        position="relative"
      >
        <Toolbar disableGutters className="w-full md:px-14">
          <Grid container className="w-full">
            {!isMobile && (
              <>
                <Grid item xs={2}>
                  <SocialButtonsContainer
                    socialList={leftSocialList}
                    buttonLabel="chi siamo"
                    buttonLink="/about"
                  />
                </Grid>
                <Grid item xs={8} className="relative">
                  <Logo />
                </Grid>
                <Grid item xs={2}>
                  <SocialButtonsContainer
                    socialList={rightSocialList}
                    buttonLabel="manifesto"
                    buttonLink="/manifest"
                  />
                </Grid>
              </>
            )}
            {isMobile && (
              <>
                <Grid item xs={2} className="flex items-center justify-center">
                  <Link href="/about" passHref>
                    <IconButton component="a" color="primary">
                      <MdGroup />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item xs={8} className="flex items-center justify-center">
                  <Logo />
                </Grid>
                <Grid item xs={2} className="flex items-center justify-center">
                  <Link href="/manifest" passHref>
                    <IconButton component="a" color="primary">
                      <IoDocument />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item xs={12} className="flex ">
                  <IconButton
                    className="ml-auto"
                    onClick={() => toggleOpen(!open)}
                  >
                    <IoMenu />
                  </IconButton>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBarTitle />
    </>
  );
}

function FightMainHeader(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const router = useRouter();
  const isSecondLevelRoute = router.route.split('/').length > 2;
  const { open, toggleOpen } = useContext(FightDrawerContext);
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
          {!isMobile && (
            <Grid item xs={12}>
              <FightMobileNavigation />
            </Grid>
          )}
          <Grid item xs={12} className="flex w-full justify-between ">
            {isSecondLevelRoute && (
              <IconButton className="mr-auto" onClick={() => router.back()}>
                <HiOutlineChevronLeft />
              </IconButton>
            )}
            {isMobile && (
              <IconButton className="ml-auto" onClick={() => toggleOpen(!open)}>
                <IoMenu />
              </IconButton>
            )}
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
