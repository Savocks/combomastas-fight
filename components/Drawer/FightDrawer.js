import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import Link from 'next/link';

export default function FightDrawer({ drawerState }) {
  return (
    <Drawer
      sx={{
        '.MuiPaper-root': {
          width: '80vw',
          pt: '3em',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      anchor="right"
      open={drawerState.open}
    >
      <IconButton
        className="absolute right-4 top-1"
        onClick={() => drawerState.toggleOpen()}
      >
        <IoClose />
      </IconButton>
      <Divider />
      <List onClick={() => drawerState.toggleOpen()}>
        <Link href="/about">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              CHI SIAMO
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/studio">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              STUDIO
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/roaster">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              #71417 MNGMNT
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/merchandising">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              MERCH & WEAR
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/events">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              EVENTS
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/label">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              LABELS
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/manifest">
          <ListItem button component="a">
            <ListItemText
              color="primary"
              primaryTypographyProps={{
                color: 'primary.main',
              }}
            >
              MANIFEST
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Box className="mt-auto flex flex-col items-center justify-center gap-4 p-4">
        <Box className="flex w-full justify-between">
          <Button color="primary" variant="contained" component="a">
            ISCRIVITI
          </Button>
          <Button color="primary" variant="contained" component="a">
            SOSTIENICI
          </Button>
        </Box>
        <Box className="flex w-full flex-col items-center justify-center text-center">
          <Typography typography="caption">
            &copy; RIGHT COMBO MASTAS' ENTERTAINMENT
          </Typography>
          <Typography typography="caption">
            POWERED BY COMBOSTUDIO.IT
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
