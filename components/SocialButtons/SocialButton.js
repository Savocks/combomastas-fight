import { getAllSocialButtons } from './socialButtonMapper';
import { IconButton } from '@mui/material';
import Link from 'next/link';

function SocialButton({ social, size, isInternal = false }) {
  const { label, href, IconComponent } = getAllSocialButtons()[social];

  return (
    <>
      {!isInternal && (
        <IconButton
          size={size}
          component="a"
          color="primary"
          href={href}
          target="_blank"
        >
          <IconComponent />
        </IconButton>
      )}
      {isInternal && (
        <Link href={href} passHref>
          <IconButton size={size} component="a" color="primary">
            <IconComponent />
          </IconButton>
        </Link>
      )}
    </>
  );
}

export default SocialButton;
