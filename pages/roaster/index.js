import { getAllRoaster } from '../../lib/roaster';
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import styles from '../../styles/components/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import FightLogo from '../../components/Logo/Logo';
import SiteSlogan from '../../components/SiteSlogan/SiteSlogan';
import SocialButton from '../../components/SocialButtons/SocialButton';
import FightCard from '../../components/FightCard';

const PageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '10% auto 10%',
  gridRowGap: '1em',
}));

const PageHeader = styled(Paper)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '100%',
  padding: '0 1.5em',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '200px auto',
  },
}));

export default function Index({ allRoasterData }) {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <PageContainer>
      <PageHeader elevation={8}>
        <FightLogo />
        {!isTablet && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <SocialButton social="facebook" />
            <SocialButton social="instagram" />
            <SocialButton social="twitter" />
            <SocialButton social="youtube" />
            <SocialButton social="twitch" />
            <SocialButton social="telegram" />
          </Box>
        )}
      </PageHeader>
      <div>
        <SiteSlogan />
        <Box
          sx={{
            padding: '0 1em',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Typography typography="h3" color="primary">
            #71417 FIGHT
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur doloribus est illum ipsa ipsam modi, nostrum quae, quam
            quos rem reprehenderit tenetur voluptas? Deserunt minima nesciunt
            porro qui sint ut.
          </Typography>
          <Grid container>
            {allRoasterData.map((roaster) => (
              <Grid key={roaster.name} item xs={12}>
                <FightCard item={roaster} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <div>ciao</div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const allRoasterData = getAllRoaster();
  return {
    props: {
      allRoasterData,
    },
  };
}
