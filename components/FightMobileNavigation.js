import Link from 'next/link';
import { Box, Button, Tab, Tabs, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function FightMobileNavigation() {
  const router = useRouter();
  const [value, setValue] = useState(router.route);
  useEffect(() => {
    setValue(router.route);
    return setValue(router.route);
  }, [router]);
  return (
    <Box className="my-2 flex justify-center gap-4">
      <Link href="/about" passHref>
        <Button component="a" variant="contained">
          CHI SIAMO
        </Button>
      </Link>
      <Link href="/studio" passHref>
        <Button component="a" variant="contained">
          STUDIO
        </Button>
      </Link>
      <Link href="/roaster" passHref>
        <Button component="a" variant="contained">
          #71417 MNGMNT
        </Button>
      </Link>
      <Link href="/merchandising" passHref>
        <Button component="a" variant="contained">
          MERCH & WEAR
        </Button>
      </Link>
      <Link href="/events" passHref>
        <Button component="a" variant="contained">
          EVENTS
        </Button>
      </Link>
      <Link href="/label" passHref>
        <Button component="a" variant="contained">
          LABEL
        </Button>
      </Link>
      <Link href="/manifest" passHref>
        <Button component="a" variant="contained">
          MANIFEST
        </Button>
      </Link>
    </Box>
  );
}
