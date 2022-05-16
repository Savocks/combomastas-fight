import { getAllRoasterNames, getRoasterData } from '../../lib/roaster';
import { Box, Card, Link, List, ListItem, Typography } from '@mui/material';
import Carousel from '../../components/Carousel/Carousel';
import SocialButton from '../../components/SocialButtons/SocialButton';
import PageLayout from '../../components/Layout/PageLayout';

export default function Roaster({ roasterData }) {
  return (
    <PageLayout>
      <Card
        variant="elevation"
        elevation={14}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1em',
        }}
      >
        <Typography
          component="h2"
          typography="h2"
          textTransform="uppercase"
          color="primary"
        >
          {roasterData.name}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          consequuntur cum dolore, dolorum ducimus eius esse est expedita id
          incidunt ipsum minima, molestias mollitia obcaecati quia? Nostrum
          omnis quis quisquam.
        </Typography>
      </Card>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllRoasterNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const roasterData = getRoasterData(params.name);
  return {
    props: {
      roasterData,
    },
  };
}
