import { useCallback } from "react";
import { Typography, Box, Avatar } from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import Link from "@mui/material/Link";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./style";
import ImageIcon from "@mui/icons-material/Image";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const CoinUploader = ({
  addIconData,
  setAddIcon,
  image,
  slug,
  variant,
  inActive,
  proof,
}: any) => {
  const classes = useStyles();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setAddIcon({
        ...addIconData,
        coinLogo: acceptedFiles[0],
        thumb_icon: acceptedFiles[0],
        icon: acceptedFiles[0],
        logo: acceptedFiles[0],
        banner_image: acceptedFiles[0],
      });
    },
    [addIconData, setAddIcon]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: "image/jpeg,image/png,image/gif",
    });

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <Typography variant="caption" key={file.path}>
      {file.path}

      {/* {    {file.path} - {file.size} bytes} */}
    </Typography>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <Typography variant="caption" key={file.path}>
      {file.size} bytes -
      {errors.map((e: any) => (
        <span key={e.code}>{e.message}</span>
      ))}
    </Typography>
  ));
  return (
    <Box className={classes.mainWrapper}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <Box className={classes.outerWrapper}>
          <Box className={classes.iconWrapper}>
            <UploadFileOutlinedIcon />
          </Box>
          <Box className={classes.innerWrapper}>
            {acceptedFileItems.length === 0 &&
            fileRejectionItems.length === 0 ? (
              <>
                <Typography variant="subtitle2">
                  Drop your logo here, or
                  <Link underline="none">{" Browse"}</Link>
                </Typography>
                <Typography variant="caption">
                  (Supports JPEG, PNG, GIF - 200w x 200h)
                </Typography>
              </>
            ) : (
              acceptedFileItems.length > 0 && (
                <span className={classes.fileAccepted}>
                  {acceptedFileItems}
                </span>
              )
            )}
            {fileRejectionItems ? (
              <span className={classes.fileRejected}>
                {" "}
                {fileRejectionItems}
              </span>
            ) : (
              <>
                <Typography variant="subtitle2">
                  Drop your logo here, or
                  <Link underline="none">{" Browse"}</Link>
                </Typography>
                <Typography variant="caption">
                  (Supports JPEG, PNG, GIF - 200w x 200h)
                </Typography>
              </>
            )}
          </Box>

          {acceptedFiles &&
          acceptedFiles[0] === undefined &&
          variant === "ads" &&
          addIconData?.banner_image !== undefined ? (
            <Avatar
              src={`${serverAPIUrl}public/uploads/${slug}/${addIconData?.banner_image}`}
              alt="icon"
              sx={{ marginLeft: 1 }}
            ></Avatar>
          ) : (
            <Avatar
              src={`${
                acceptedFileItems.length > 0
                  ? URL.createObjectURL(acceptedFiles[0])
                  : image !== "" && image !== undefined
                  ? image
                  : "#"
              }`}
              alt="icon"
              sx={{ marginLeft: 1 }}
            >
              <ImageIcon />
            </Avatar>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default CoinUploader;
