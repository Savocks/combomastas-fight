import { Grid } from '@mui/material';
import FightHomeCard from '../components/FightHomeCard';

export default function Index() {
  return (
    <Grid
      className=" p-4 sm:p-12"
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
  );
}
