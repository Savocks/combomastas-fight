import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import FightHomeCard from '../components/FightHomeCard';
import { FightHomeHeader } from '../components/Header/FightHeader';
import FightFooter from '../components/Footer/FightFooter';

export default function Index() {
  const footerShouldBeHidden = useMediaQuery((theme) =>
    theme.breakpoints.only('xs')
  );

  return (
    <Box className="flex h-screen grid-rows-6 flex-col  ">
      <FightHomeHeader />
      <Grid
        className="relative h-full shrink grow basis-8/12 p-4 sm:p-12"
        container
        sx={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        spacing={2}
        columns={15}
      >
        <Grid className="h-32 w-32  sm:h-full sm:w-full" item xs={6} sm={3}>
          <FightHomeCard href="/studio" label="STUDIO" />
        </Grid>
        <Grid className="h-32 w-32  sm:h-full sm:w-full" item xs={6} sm={3}>
          <FightHomeCard href="/roaster" label="#71417 MNGMNT" />
        </Grid>
        <Grid className="h-32 w-32  sm:h-full sm:w-full" item xs={6} sm={3}>
          <FightHomeCard href="/merchandising" label="MERCH & WEAR" />
        </Grid>
        <Grid className="h-32 w-32  sm:h-full sm:w-full" item xs={6} sm={3}>
          <FightHomeCard href="/events" label="EVENTS" />
        </Grid>
        <Grid className="h-32 w-32  sm:h-full sm:w-full" item xs={6} sm={3}>
          <FightHomeCard href="/label" label="LABEL" />
        </Grid>
      </Grid>
      {!footerShouldBeHidden && <FightFooter>Ciao</FightFooter>}
    </Box>
  );
}
