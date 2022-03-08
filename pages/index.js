import {
  AppBar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  Toolbar,
} from '@mui/material';
import Image from 'next/image';

export default function Index() {
  return (
    <div className="relative grid h-screen w-full grid-cols-1 grid-rows-6 place-content-center place-items-center">
      <AppBar position="relative" elevation={0} className="row-span-1 h-full">
        <Toolbar
          sx={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}
        >
          <Image src="/images/fight.png" height={150} width={450} alt="FIGHT" />
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        component="main"
        className="row-span-4 h-full py-12 sm:py-24"
      >
        <Box
          className="
            flex h-full
            w-full flex-wrap items-center
            justify-center
            gap-4
            sm:grid
            sm:auto-cols-max sm:auto-rows-max
            sm:grid-cols-5 sm:grid-rows-1
            sm:place-content-center
            sm:place-items-center sm:gap-8
            "
        >
          <Card
            className="h-32 basis-2/5 sm:h-full sm:w-full"
            sx={{ bgcolor: 'primary.main', textAlign: 'center' }}
          >
            <CardActionArea className="h-full">
              <CardHeader title="STUDIO" />
            </CardActionArea>
          </Card>
          <Card
            className="h-32 basis-2/5 sm:h-full sm:w-full"
            sx={{
              bgcolor: 'primary.main',
              textAlign: 'center',
            }}
          >
            <CardActionArea className="h-full">
              <CardHeader title="#71417 MNGMNT" />
            </CardActionArea>
          </Card>
          <Card
            className="h-32 basis-2/5 sm:h-full sm:w-full"
            sx={{ bgcolor: 'primary.main', textAlign: 'center' }}
          >
            <CardActionArea className="h-full">
              <CardHeader title="MERCH & WEAR" />
            </CardActionArea>
          </Card>
          <Card
            className="h-32 basis-2/5 sm:h-full sm:w-full"
            sx={{ bgcolor: 'primary.main', textAlign: 'center' }}
          >
            <CardActionArea className="h-full">
              <CardHeader title="EVENTI" />
            </CardActionArea>
          </Card>
          <Card
            className="h-32 basis-2/5 sm:h-full sm:w-full"
            sx={{ bgcolor: 'primary.main', textAlign: 'center' }}
          >
            <CardActionArea className="h-full">
              <CardContent>
                <CardHeader title="LABEL" />
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
      <AppBar
        elevation={0}
        component="footer"
        position="relative"
        color="primary"
        className="row-span-1 h-full"
        sx={{ top: 'auto', bottom: 0 }}
      >
        <Toolbar
          sx={(theme) => ({
            height: theme.components.Footer.defaultProps.height,
          })}
        >
          ciao
        </Toolbar>
      </AppBar>
    </div>
  );
}
