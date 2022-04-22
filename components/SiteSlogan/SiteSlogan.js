import styles from './SiteSlogan.module.scss';
import { Typography } from '@mui/material';

export default function SiteSlogan(props) {
  return (
    <Typography
      className={styles.siteSlogan}
      color="primary"
      component="h2"
      typography="h3"
    >
      DREAMER & VISIONARY
    </Typography>
  );
}
