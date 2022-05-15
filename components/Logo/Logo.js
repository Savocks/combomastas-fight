import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material';

const LogoContainer = styled('a')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
}));

export default function FightLogo() {
  return (
    <Link href="/" passHref>
      <LogoContainer>
        <Image
          src={'/images/fight.png'}
          layout="fill"
          objectFit="contain"
          alt="Logo"
        />
      </LogoContainer>
    </Link>
  );
}
