import { Button, useMediaQuery } from '@mui/material';
import SocialButton from '../SocialButtons/SocialButton';
import Link from 'next/link';

export default function HomeSocialButton({
  socialList,
  buttonHref,
  buttonLabel,
  mobileButton,
}) {
  const isMobile = useMediaQuery('screen and (max-width:525px)');

  return (
    <>
      {!isMobile && (
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          {socialList.map((social) => (
            <SocialButton key={social} social={social} />
          ))}
          <Link href={buttonHref} passHref>
            <Button component="a" className="col-span-full" variant="contained">
              {buttonLabel}
            </Button>
          </Link>
        </div>
      )}
      {isMobile && <SocialButton social={mobileButton} isInternal />}
    </>
  );
}
