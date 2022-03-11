import { Card, CardActionArea, CardHeader } from '@mui/material';
import { useRouter } from 'next/router';

export default function FightHomeCard({ href, label }) {
  const router = useRouter();
  return (
    <Card
      className="h-32 basis-2/5 sm:h-full sm:w-full"
      sx={{ bgcolor: 'primary.main', textAlign: 'center' }}
    >
      <CardActionArea className="h-full" onClick={() => router.push(href)}>
        <CardHeader title={label} />
      </CardActionArea>
    </Card>
  );
}
