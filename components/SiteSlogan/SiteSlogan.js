import styles from './SiteSlogan.module.scss';
import { styled, Typography } from '@mui/material';

const TypographySlogan = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  alignSelf: 'center',
  fontSize: '30px',
  letterSpacing: '.2em',
  [theme.breakpoints.up('sm')]: {
    fontSize: '35px',
    letterSpacing: '0.6em',
  },
}));

export default function SiteSlogan(props) {
  return (
    <TypographySlogan color="primary" component="h2" typography="h3">
      DREAMER & VISIONARY
    </TypographySlogan>
  );
}
