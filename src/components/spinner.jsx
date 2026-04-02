import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { yellow } from '@mui/material/colors';

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <CircularProgress sx={{ color: yellow[500] }} />
    </Box>
  );
}