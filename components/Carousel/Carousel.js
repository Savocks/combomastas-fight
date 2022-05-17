import { Box, styled } from '@mui/material';
import Image from 'next/image';

function FightCarouselContainer({ children }) {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '80%',
        gap: '1em',
        overflowX: 'auto',
        position: 'relative',
        [theme.breakpoints.up('xs')]: {
          gridAutoColumns: '40%',
        },
        [theme.breakpoints.up('sm')]: {
          gridAutoColumns: '20%',
        },
      })}
    >
      {children}
    </Box>
  );
}

function FightCarouselItem({ name, href }) {
  return (
    <Box
      key={name}
      sx={{
        position: 'relative',
      }}
    >
      <Image
        src={href}
        alt={name}
        height={200}
        width={300}
        layout="intrinsic"
        objectFit="cover"
      />
    </Box>
  );
}

export default function FightCarousel({ imagesList }) {
  return (
    <FightCarouselContainer>
      {imagesList.map(({ href, name }) => (
        <FightCarouselItem key={name} href={href} name={name} />
      ))}
    </FightCarouselContainer>
  );
}
