import { getAllSocialButtons } from './socialButtonMapper';
import { IconButton } from '@mui/material';

function SocialButton({ social, size }) {
  const { label, href, IconComponent } = getAllSocialButtons()[social];

  return (
    <IconButton
      size={size}
      component="a"
      color="primary"
      href={href}
      target="_blank"
    >
      <IconComponent />
    </IconButton>
  );
}

export default SocialButton;
