import { IconButton, useMediaQuery } from '@mui/material';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { useDrawer } from '../../context/DrawerContext';

export default function HamburgerMenu(props) {
  const isBelowNotebook = useMediaQuery((theme) =>
    theme.breakpoints.down('md')
  );

  const { dispatch } = useDrawer();

  return (
    <>
      {isBelowNotebook && (
        <IconButton color="primary" onClick={() => dispatch({ type: 'open' })}>
          <FaBars />
        </IconButton>
      )}
    </>
  );
}
