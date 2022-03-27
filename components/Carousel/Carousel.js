import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  IconButton,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { IoClose } from '@react-icons/all-files/io5/IoClose';

const ItemContainer = ({ items }) => {
  return (
    <div className="relative flex max-h-[400px] w-full snap-x snap-mandatory snap-mandatory gap-8 overflow-x-auto overflow-y-hidden py-12 px-5">
      {items.map((item) => (
        <ItemElement item={item} key={item.name} />
      ))}
    </div>
  );
};

const ItemElement = ({ item }) => {
  const [open, setOpen] = useState(false);
  const href = item.previewImage ? item.previewImage : item.href;
  return (
    <Card className="h-full w-[250px] shrink-0 grow-0 snap-center snap-always">
      <CardActionArea onClick={() => setOpen(true)}>
        <CardMedia component="img" image={href} alt={item.name} />
      </CardActionArea>
      <Dialog fullScreen open={open} sx={{ p: 10 }}>
        <Box className="relative flex h-full w-full items-center justify-center">
          <IconButton
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2"
          >
            <IoClose />
          </IconButton>
          {item.previewImage && <video src={item.href} controls autoPlay />}
          {!item.previewImage && <img src={item.href} alt={item.name} />}
        </Box>
      </Dialog>
    </Card>
  );
};

export default function Carousel({ items }) {
  return (
    <>
      <ItemContainer items={items} />
    </>
  );
}
