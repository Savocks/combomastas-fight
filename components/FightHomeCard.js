import { Card, CardActionArea, CardHeader } from '@mui/material';
import { useRouter } from 'next/router';

export default function FightHomeCard({ href, label }) {
  const router = useRouter();
  return (
    <Card
      className="h-full w-full"
      sx={{
        bgcolor: 'primary.main',
        textAlign: 'center',
        color: 'secondary.main',
      }}
    >
      <CardActionArea className="h-full" onClick={() => router.push(href)}>
        <CardHeader title={label} />
      </CardActionArea>
    </Card>
  );
}
