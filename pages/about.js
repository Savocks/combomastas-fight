import { Container, Grid, Typography } from '@mui/material';
import PageLayout from '../components/Layout/PageLayout';
import FightCard from '../components/FightCard';

const PageTitle = () => (
  <Typography component="h2" typography="h2" color="primary">
    CHI SIAMO
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

export default function About() {
  return (
    <>
      <PageLayout
        pageTitle={<PageTitle />}
        pageDescription={<PageDescription />}
      />
    </>
  );
}
