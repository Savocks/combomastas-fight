import { Box, Container, Paper, Typography } from '@mui/material';
import PageLayout from '../components/Layout/PageLayout';
const PageTitle = () => (
  <Typography component="h2" typography="h2" color="primary">
    STUDIO
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
function Studio(props) {
  return (
    <>
      <PageLayout
        pageTitle={<PageTitle />}
        pageDescription={<PageDescription />}
      />
    </>
  );
}

export default Studio;
