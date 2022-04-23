import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

export default function BackButton(props) {
  const router = useRouter();
  return (
    <IconButton color="primary" onClick={() => router.back()}>
      <FaChevronLeft />
    </IconButton>
  );
}
