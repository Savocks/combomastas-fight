import { Box, Container } from '@mui/material';
import FightHomeCard from '../components/FightHomeCard';

export default function Index() {
  return (
    <Container className="h-full py-12 sm:py-24">
      <Box
        className="
            flex h-full
            w-full flex-wrap items-center
            justify-center
            gap-4
            sm:grid
            sm:auto-cols-max sm:auto-rows-max
            sm:grid-cols-5 sm:grid-rows-1
            sm:place-content-center
            sm:place-items-center sm:gap-8
            "
      >
        <FightHomeCard href="/studio" label="STUDIO" />
        <FightHomeCard href="/roaster" label="#71417 MNGMNT" />
        <FightHomeCard href="/merchandising" label="MERCH & WEAR" />
        <FightHomeCard href="/events" label="EVENTS" />
        <FightHomeCard href="/label" label="LABEL" />
      </Box>
    </Container>
  );
}
