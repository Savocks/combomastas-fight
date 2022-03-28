import { getAllRoasterNames, getRoasterData } from '../../lib/roaster';
import { Box, Card, Link, List, ListItem, Typography } from '@mui/material';
import Carousel from '../../components/Carousel/Carousel';
import SocialButton from '../../components/SocialButtons/SocialButton';

export default function Roaster({ roasterData }) {
  return (
    <Box className="h-screen w-full md:p-14">
      <Card
        className="p-5 lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-8"
        variant="elevation"
        elevation={14}
      >
        <Box className="flex flex-col lg:col-span-4 lg:row-span-5">
          <Typography
            component="h2"
            typography="h2"
            textTransform="uppercase"
            color="primary"
          >
            {roasterData.name}
          </Typography>
          <Typography>{roasterData.biography}</Typography>
          <Box className="flex flex-col">
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
          <Box className="flex flex-col">
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
        </Box>
        <Box className="flex flex-col items-center lg:col-span-8 lg:row-span-5">
          <Carousel items={roasterData.images} />
          <Carousel items={roasterData.videos} />
        </Box>
        <Box className="flex flex-col lg:col-span-full lg:row-span-1">
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
              <SocialButton
                key={social.socialName}
                social={social.socialName}
              />
            ))}
          </Box>
        </Box>
      </Card>
    </Box>
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
