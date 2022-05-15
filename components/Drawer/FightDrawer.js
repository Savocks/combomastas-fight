import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import Link from 'next/link';
import { useDrawer } from '../../context/DrawerContext';
import Image from 'next/image';
import SocialButton from '../SocialButtons/SocialButton';

const SlantedRightButton = styled(Button)({
  clipPath: 'polygon(0 0, 100% 0%, 85% 100%, 0 100%);',
});
const SlantedLeftButton = styled(Button)({
  clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0 100%);',
});

export default function FightDrawer(props) {
  const { state, dispatch } = useDrawer();
  return (
    <Drawer
      sx={{
        '.MuiPaper-root': {
          width: '300px',
        },
      }}
      anchor="right"
      open={state.open}
    >
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '150px auto 200px',
        }}
      >
        <Box className="relative h-full">
          <Image
            src={'/images/fight.png'}
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
          <IconButton onClick={() => dispatch({ type: 'close' })}>
            <IoClose />
          </IconButton>
        </Box>
        <List onClick={() => dispatch({ type: 'close' })}>
          <Divider />
          <Link href="/about" passHref>
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
          <Link href="/studio" passHref>
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
          <Link href="/roaster" passHref>
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
          <Link href="/merchandising" passHref>
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
          <Link href="/events" passHref>
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
          <Link href="/label" passHref>
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
          <Link href="/manifest" passHref>
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
        <Box className="flex flex-col items-center justify-center gap-4 p-4">
          <Box className="grid w-full grid-cols-2 place-content-stretch place-items-stretch">
            <SlantedRightButton
              color="primary"
              variant="contained"
              component="a"
            >
              ISCRIVITI
            </SlantedRightButton>
            <SlantedLeftButton
              color="primary"
              variant="contained"
              component="a"
            >
              SOSTIENICI
            </SlantedLeftButton>
          </Box>
          <Box>
            <SocialButton social="facebook" />
            <SocialButton social="instagram" />
            <SocialButton social="twitter" />
            <SocialButton social="youtube" />
            <SocialButton social="twitch" />
            <SocialButton social="telegram" />
          </Box>
          <Box className="flex w-full flex-col items-center justify-center text-center">
            <Typography typography="caption">
              &copy; RIGHT COMBO MASTAS&apos; ENTERTAINMENT
            </Typography>
            <Typography typography="caption">
              POWERED BY COMBOSTUDIO.IT
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
