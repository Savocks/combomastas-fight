import { Box, Container, Typography } from '@mui/material';

export default function PageLayout({ pageTitle, pageDescription, children }) {
  return (
    <>
      <Container maxWidth="xl" component="section">
        {pageTitle}
        {pageDescription}
      </Container>
      <Container component="section">{children}</Container>
    </>
  );
}
