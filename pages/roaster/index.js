import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { getAllRoaster } from '../../lib/roaster';
import FightCard from '../../components/FightCard';
import PageLayout from '../../components/Layout/PageLayout';

const PageTitle = () => (
  <Typography component="h2" typography="h2" color="primary">
    #717417 MNGMNT
  </Typography>
);

const PageDescription = () => (
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
    consectetur cumque dignissimos dolor doloremque excepturi facilis illo
    inventore ipsa maxime molestias non odio, placeat rerum sint tempora tempore
    voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Accusamus hic in magnam, maxime
  </Typography>
);

export default function Index({ allRoasterData }) {
  return (
    <>
      <PageLayout
        pageTitle={<PageTitle />}
        pageDescription={<PageDescription />}
      >
        <Container className="my-14">
          <Grid container spacing={4} alignItems="stretch">
            {allRoasterData.map((roaster) => (
              <Grid item xs={12} md={3} key={roaster.name}>
                <FightCard item={roaster} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageLayout>
    </>
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
