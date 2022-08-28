import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Link from "@mui/material/Link";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./style";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const IconUploader = ({ addIconData, setAddIcon, slug, inActive }: any) => {
  const classes = useStyles();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      inActive === true
        ? setAddIcon({
            ...addIconData,

            inactive_icon: inActive === true ? acceptedFiles[0] : "",
          })
        : setAddIcon({
            ...addIconData,
            thumb_icon: acceptedFiles[0],
            icon: acceptedFiles[0],
            proof: acceptedFiles[0],
          });
    },
    [addIconData, setAddIcon, inActive]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ onDrop, accept: "image/jpeg,image/png,image/gif" });

  console.log(acceptedFiles[0]);

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
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ background: "white" }}
      >
        <input {...getInputProps()} />

        <Box className={classes.outerWrapper}>
          <Box className={classes.iconWrapper}>
            <FileUploadOutlinedIcon />
          </Box>
          <Box className={classes.innerWrapper} sx={{ paddingTop: 0 }}>
            {acceptedFileItems.length === 0 &&
            fileRejectionItems.length === 0 ? (
              <>
                <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                  Choose file
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

          {
            <Avatar
              src={`${
                acceptedFileItems.length > 0
                  ? URL.createObjectURL(acceptedFiles[0])
                  : `${serverAPIUrl}public/uploads/${slug}/${
                      inActive === true
                        ? addIconData.inactive_icon
                        : addIconData.thumb_icon !== "" &&
                          addIconData.thumb_icon !== undefined &&
                          addIconData.thumb_icon !== null
                        ? addIconData.thumb_icon
                        : addIconData.icon !== "" &&
                          addIconData.icon !== undefined &&
                          addIconData.icon !== null &&
                          addIconData.icon
                    }`
              }`}
              alt="icon"
            >
              <ImageIcon />
            </Avatar>
          }
        </Box>
      </div>
    </Box>
  );
};

export default IconUploader;
