import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/state";
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetsWrapper";
import PostSnackBar from "../../components/PostSnackBar";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [post, setPostText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);

    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const data = await response.json();
    dispatch(setPost({ post: data.data.post }));
    setImage(null);
    setPostText("");
    setLoading(false);
    setOpenSnackbar(true);
  };

  const action = (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => setOpenSnackbar(false)}
      >
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpenSnackbar(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <WidgetWrapper>
      {openSnackbar && (
        <PostSnackBar
          action={action}
          open={openSnackbar}
          handleClose={() => setOpenSnackbar(false)}
        />
      )}
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="Whats on your mind..."
          onChange={(e) => setPostText(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}
      <Divider sx={{ margin: "1.25rem 0" }} />
      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>
        {isNonMobile ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>
            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>
            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <>
            <FlexBetween gap="0.25rem">
              <MoreHorizOutlined sx={{ color: mediumMain }} />
            </FlexBetween>
          </>
        )}
        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.default,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          {loading ? <CircularProgress size="1rem" /> : "POST"}
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
