import { Box } from '@mui/material';
import GeographyChart from '../../components/GeographyChart';
import Header from '../../components/Header';

export default function Geography() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Line Chart" />

      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}
