import {
  Box,
  Grid,
  Paper,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import FightLogo from '../Logo/Logo';
import SocialButton from '../SocialButtons/SocialButton';
import SiteSlogan from '../SiteSlogan/SiteSlogan';
import FightCard from '../FightCard';

const PageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '10% auto',
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

export default function PageLayout({ children }) {
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
          {children}
        </Box>
      </div>
    </PageContainer>
  );
}
