import { Card, CardActionArea, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function FightCard({ item }) {
  const [imageVisible, setImageVisible] = useState(false);
  const router = useRouter();
  return (
    <Card
      onMouseEnter={() => setImageVisible(true)}
      onMouseLeave={() => setImageVisible(false)}
      onClick={() => router.push(item.pageLink)}
      variant="elevation"
      color="primary"
      sx={(theme) => ({
        width: '100%',
        minHeight: '200px',
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'secondary.main',
      })}
    >
      <CardActionArea className="absolute h-full w-full">
        {imageVisible && (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        )}
        {!imageVisible && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Typography>{item.name}</Typography>
          </div>
        )}
      </CardActionArea>
    </Card>
  );
}
