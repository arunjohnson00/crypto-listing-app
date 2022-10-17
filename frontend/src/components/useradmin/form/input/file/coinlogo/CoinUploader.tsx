import { useCallback } from "react";
import { Typography, Box, Avatar } from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import Link from "@mui/material/Link";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./style";
import ImageIcon from "@mui/icons-material/Image";
const CoinUploader = ({ addIconData, setAddIcon, image, title }: any) => {
  const classes = useStyles();

  const onDrop: any = useCallback(
    (acceptedFiles: any) => {
      setAddIcon({
        ...addIconData,
        coinLogo: acceptedFiles[0],
      });
    },
    [addIconData, setAddIcon]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      //accept: "image/jpeg,image/png,image/gif",
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
                <Typography variant="subtitle2" sx={{ color: "#818181e8" }}>
                  Drop your {title && title} here, or
                  <Link underline="none">{" Browse"}</Link>
                </Typography>
                <Typography variant="caption" sx={{ color: "#818181e8" }}>
                  (Supports JPEG, PNG, GIF )
                </Typography>
              </>
            ) : (
              acceptedFileItems.length > 0 && (
                <span className={classes.fileAccepted}>
                  {acceptedFileItems && acceptedFileItems.length > 0
                    ? URL.createObjectURL(acceptedFiles[0]).slice(0, 10) +
                      "..." +
                      URL.createObjectURL(acceptedFiles[0]).slice(-10)
                    : acceptedFileItems}
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
                  Drop your {title && title} here, or
                  <Link underline="none">{" Browse"}</Link>
                </Typography>
                <Typography variant="caption">
                  (Supports JPEG, PNG, GIF )
                </Typography>
              </>
            )}
          </Box>
          {
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
          }
        </Box>
      </div>
    </Box>
  );
};

export default CoinUploader;
