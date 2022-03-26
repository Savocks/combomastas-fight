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

export default function Index({ allRoasterData }) {
  return (
    <>
      <Container maxWidth="xl" component="section">
        <Typography
          typography="h1"
          component="h1"
          color="primary"
          fontWeight={500}
        >
          #717417 MNGMNT
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          consectetur cumque dignissimos dolor doloremque excepturi facilis illo
          inventore ipsa maxime molestias non odio, placeat rerum sint tempora
          tempore voluptate voluptatibus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus hic in magnam, maxime
          obcaecati officia optio praesentium quisquam sequi soluta? Adipisci
          consequatur distinctio doloremque ea labore maxime nemo optio quidem?
        </Typography>
      </Container>
      <Container className="my-14">
        <Grid container spacing={4} alignItems="stretch">
          {allRoasterData.map((roaster) => (
            <Grid item xs={12} md={3} key={roaster.name}>
              <FightCard item={roaster} />
            </Grid>
          ))}
        </Grid>
      </Container>
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
