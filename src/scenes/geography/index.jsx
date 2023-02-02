import { Box } from '@mui/material';
import GeographyChart from '../../components/GeographyChart';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
