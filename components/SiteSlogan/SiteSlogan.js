import { Box, styled, Typography } from '@mui/material';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import BackButton from '../BackButton/BackButton';

const SiteSloganWrapper = styled(Box)((them) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.5em',
}));

const TypographySlogan = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  alignSelf: 'center',
  fontSize: '25px',
  letterSpacing: '.2em',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    fontSize: '35px',
    letterSpacing: '0.6em',
  },
}));

export default function SiteSlogan(props) {
  return (
    <SiteSloganWrapper>
      <BackButton />
      <TypographySlogan color="primary" component="h2" typography="h3">
        DREAMER & VISIONARY
      </TypographySlogan>
      <HamburgerMenu />
    </SiteSloganWrapper>
  );
}
