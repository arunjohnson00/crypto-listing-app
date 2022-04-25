import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Link from "@mui/material/Link";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./style";

const AvatarUploder = ({ addIconData, setAddIcon }: any) => {
  const classes = useStyles();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setAddIcon({
        ...addIconData,
        avatar: acceptedFiles[0],
      });
    },
    [addIconData, setAddIcon]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ onDrop, accept: "image/jpeg,image/png,image/gif" });

  //console.log(acceptedFiles[0]);

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <Typography variant="caption" key={file.path}>
      {file.path} - {file.size} bytes
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
            <FileUploadOutlinedIcon />
          </Box>
          <Box className={classes.innerWrapper}>
            {acceptedFileItems.length === 0 &&
            fileRejectionItems.length === 0 ? (
              <>
                <Typography variant="h6">Choose file</Typography>
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
        </Box>
      </div>
    </Box>
  );
};

export default AvatarUploder;
