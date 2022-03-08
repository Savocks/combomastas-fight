import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
} from '@mui/material';

function Studio(props) {
  return (
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
  );
}

export default Studio;
