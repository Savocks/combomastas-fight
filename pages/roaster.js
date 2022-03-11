import { Container, Typography } from '@mui/material';

export default function Roaster(props) {
  return (
    <Container maxWidth="xl" className="h-full ">
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
        tempore voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Accusamus hic in magnam, maxime obcaecati officia
        optio praesentium quisquam sequi soluta? Adipisci consequatur distinctio
        doloremque ea labore maxime nemo optio quidem?
      </Typography>
    </Container>
  );
}
