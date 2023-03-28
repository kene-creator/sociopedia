import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Box, useTheme } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AuthSnackBar({
  open,
  handleClose,
  action,
  severity,
  message,
}) {
  const { palette } = useTheme();
  return (
    <Box position="fixed" top={0} right={0} zIndex={9999}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%", fontSize: "1.2rem" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
