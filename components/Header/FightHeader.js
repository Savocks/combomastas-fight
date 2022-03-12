import { AppBar, Grid, Toolbar, useMediaQuery } from '@mui/material';
import SocialButton from '../SocialButtons/SocialButton';
import SocialButtonsContainer from '../SocialButtonsContainer';
import Logo from '../Logo';
import AppBarTitle from '../AppBarTitle';

const leftSocialList = ['facebook', 'instagram', 'twitter'];

const rightSocialList = ['youtube', 'twitch', 'telegram'];

export function FightHomeHeader(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar
      className="h-full w-full shrink grow basis-2/12 py-4"
      elevation={4}
      position="relative"
    >
      <Toolbar className="h-full w-full ">
        <Grid container className="relative h-full">
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
            <Grid item xs={12} className="relative h-24">
              <Logo />
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={8} className="relative h-24">
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
