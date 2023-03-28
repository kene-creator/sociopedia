import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`https://sociopedia-tw54.onrender.com/assets/${image}`}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
