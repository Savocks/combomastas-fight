import Link from 'next/link';
import { Tab, Tabs } from '@mui/material';
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
    <Tabs
      sx={(theme) => ({
        '& .MuiTabs-flexContainer': {
          [theme.breakpoints.not('xs')]: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
      })}
      variant="scrollable"
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      scrollButtons={false}
    >
      <Link href="/about" value="/about">
        <Tab component="a" label="CHI SIAMO" />
      </Link>
      <Link href="/studio" value="/studio">
        <Tab component="a" label="STUDIO" />
      </Link>
      <Link href="/roaster" value="/roaster">
        <Tab component="a" label="#71417 MNGMNT" />
      </Link>
      <Link href="/merchandising" value="/merchandising">
        <Tab component="a" label="MERCH & WEAR" />
      </Link>
      <Link href="/events" value="/events">
        <Tab component="a" label="EVENTI" />
      </Link>
      <Link href="/label" value="/label">
        <Tab component="a" label="LABEL" />
      </Link>
      <Link href="/manifest" value="/manifest">
        <Tab component="a" label="MANIFESTO" />
      </Link>
    </Tabs>
  );
}
