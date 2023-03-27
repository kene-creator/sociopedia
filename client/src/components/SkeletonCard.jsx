import React from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import {
  EditOutlined,
  LocationOnOutlined,
  ManageAccountsOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetsWrapper";

import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
  const { palette } = useTheme();
  const main = palette.neutral.mediumMain;
  return (
    <WidgetWrapper>
      <Box>
        <FlexBetween gap="0.5rem" pb="1.1rem">
          <FlexBetween gap="1rem">
            <Skeleton variant="circular" width={64} height={64} />
            <Box>
              <Typography variant="h4" fontWeight="500" color="text.primary">
                <Skeleton width={120} />
              </Typography>
              <Typography color="text.secondary">
                <Skeleton width={80} />
              </Typography>
            </Box>
            <Skeleton variant="circular" width={32} height={32} />
          </FlexBetween>
        </FlexBetween>
        <Divider />

        <Box p="1rem 0">
          <Box display="flex" alignItems="center" mb="0.5rem" gap="1rem">
            <Typography color="text.secondary">
              <Skeleton width={80} />
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <Typography color="text.secondary">
              <Skeleton width={80} />
            </Typography>
          </Box>
        </Box>
        <Divider />

        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color="text.secondary">
              <Skeleton width={40} />
            </Typography>
            <Typography color="primary.main" fontWeight="500">
              <Skeleton width={40} />
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color="text.secondary">
              <Skeleton width={40} />
            </Typography>
            <Typography color="primary.main" fontWeight="500">
              <Skeleton width={40} />
            </Typography>
          </FlexBetween>
        </Box>
        <Divider />

        <Box p="1rem 0">
          <Typography
            fontSize="1rem"
            color="primary.main"
            fontWeight="500"
            mb="1rem"
          >
            <Skeleton width={80} />
          </Typography>
          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <Skeleton variant="rectangular" width={32} height={32} />
              <Box>
                <Typography color="primary.main" fontWeight="500">
                  <Skeleton width={80} />
                </Typography>
                <Typography color="text.secondary" fontWeight="500">
                  <Skeleton width={120} />
                </Typography>
              </Box>
            </FlexBetween>
            <EditOutlined sx={{ color: main }} />
          </FlexBetween>

          <FlexBetween gap="1rem">
            <FlexBetween gap="1rem">
              <Skeleton variant="rectangular" width={32} height={32} />
              <Box>
                <Typography color="primary.main" fontWeight="500">
                  <Skeleton width={80} />
                </Typography>
                <Typography color="text.secondary" fontWeight="500">
                  <Skeleton width={120} />
                </Typography>
              </Box>
            </FlexBetween>
            <EditOutlined sx={{ color: main }} />
          </FlexBetween>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default SkeletonCard;
