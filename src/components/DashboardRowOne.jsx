import { tokens } from '../theme';
import StatBox from './StatBox';
import { Box, useTheme } from '@mui/material';
import { Email, PointOfSale, PersonAdd, Traffic } from '@mui/icons-material';

export default function DashboardRowOne() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <Email sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.5"
          increase="+21%"
          icon={
            <PointOfSale
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32,441"
          subtitle="New Client"
          progress="0.30"
          increase="+5%"
          icon={
            <PersonAdd
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,325,134"
          subtitle="Traffic Inbound"
          progress="0.88"
          increase="+43%"
          icon={
            <Traffic
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
    </>
  );
}
