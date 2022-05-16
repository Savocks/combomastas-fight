import { getAllRoaster } from '../../lib/roaster';
import { Grid, Typography } from '@mui/material';
import PageLayout from '../../components/Layout/PageLayout';
import FightCard from '../../components/FightCard';

export default function Index({ allRoasterData }) {
  return (
    <PageLayout>
      <Typography typography="h3" color="primary">
        #71417 FIGHT
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        doloribus est illum ipsa ipsam modi, nostrum quae, quam quos rem
        reprehenderit tenetur voluptas? Deserunt minima nesciunt porro qui sint
        ut.
      </Typography>
      <Grid container spacing={2}>
        {allRoasterData.map((roaster) => (
          <Grid key={roaster.name} item xs={12} sm={4} md={3}>
            <FightCard item={roaster} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allRoasterData = getAllRoaster();
  return {
    props: {
      allRoasterData,
    },
  };
}
