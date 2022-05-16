import { Box } from '@mui/material';
import SocialButton from './SocialButton';

export default function SocialButtonContainer() {
  return (
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
  );
}
