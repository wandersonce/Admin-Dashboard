import { Box, Button, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { DownloadOutlined } from '@mui/icons-material';
import { tokens } from '../../theme';

import DashboardRowThree from '../../components/DashboardRowThree';
import DashboardRowTwo from '../../components/DashboardRowTwo';
import DashboardRowOne from '../../components/DashboardRowOne';

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID FOR CREATE THE DASH BOXES */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <DashboardRowOne />

        {/* ROW 2 */}
        <DashboardRowTwo />

        {/* ROW 3 */}
        <DashboardRowThree />
      </Box>
    </Box>
  );
}
