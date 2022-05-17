import { getAllRoasterNames, getRoasterData } from '../../lib/roaster';
import {
  Box,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Carousel from '../../components/Carousel/Carousel';
import SocialButton from '../../components/SocialButtons/SocialButton';
import PageLayout from '../../components/Layout/PageLayout';
import Image from 'next/image';
import FightCarousel from '../../components/Carousel/Carousel';

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
        <Typography>{roasterData.biography}</Typography>
        <Box>
          <Typography
            component="h2"
            typography="h2"
            textTransform="uppercase"
            color="primary"
          >
            Ultime uscite
          </Typography>
          <List>
            {roasterData.latestRelease.map((release) => (
              <ListItem button key={release.name}>
                <Link href={release.link} target="_blank">
                  {release.name}
                  {' - '}
                  {release.releaseYear}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography
            component="h2"
            typography="h2"
            textTransform="uppercase"
            color="primary"
          >
            EVENTI
          </Typography>
          <List>
            {roasterData.nextEvents.map((event) => (
              <ListItem button key={event.name}>
                <Link href={event.link} target="_blank">
                  {event.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <FightCarousel imagesList={roasterData.images} />
        <Typography
          component="h2"
          typography="h2"
          textTransform="uppercase"
          color="primary"
        >
          Social
        </Typography>
        <Box className="flex flex-wrap">
          {roasterData.socials.map((social) => (
            <SocialButton key={social.socialName} social={social.socialName} />
          ))}
        </Box>
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
