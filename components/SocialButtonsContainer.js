import SocialButton from './SocialButtons/SocialButton';
import Link from 'next/link';
import { Button } from '@mui/material';

function SocialButtonsContainer({ socialList, buttonLabel, buttonLink }) {
  return (
    <div className="relative flex h-full w-full flex-col flex-wrap place-content-center place-items-stretch gap-2">
      <div>
        {socialList.map((social) => (
          <SocialButton key={social} social={social} />
        ))}
      </div>
      <Link href={buttonLink} className="w-full shrink grow basis-full ">
        <Button variant="contained" color="primary" component="a">
          {buttonLabel}
        </Button>
      </Link>
    </div>
  );
}

export default SocialButtonsContainer;
