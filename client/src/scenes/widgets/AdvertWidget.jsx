import { useTheme, Typography } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetsWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={main} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}> Create Ad</Typography>
      </FlexBetween>
      <img
        src="http://localhost:3001/assests/info4.jpeg"
        alt="advert"
        width="100%"
        height="auto"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Lumia</Typography>
        <Typography color={medium} ml="0.4rem">
          Lumiatechnologies.com
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        We offer high quality technoloogies at the best prices found anywhere
        around the world
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
