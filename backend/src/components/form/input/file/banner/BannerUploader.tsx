import { Box } from "@mui/material";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const BannerUploader = ({ addIconData, setAddIcon }: any) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setAddIcon({
        ...addIconData,
        image: acceptedFiles[0],
      });
    },
    [addIconData, setAddIcon]
  );
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg,image/png,image/gif",
  });

  /*const acceptedFileItems = acceptedFiles.map((file: any) => (
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
  ));*/
  return (
    <Box>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <Button
          variant="outlined"
          startIcon={<FileUploadOutlinedIcon />}
          sx={{
            background: `${
              acceptedFiles.length === 0 ? "rgb(239, 235, 255)" : "#d5ffd3"
            }`,
            border: `${
              acceptedFiles.length === 0
                ? "1px solid rgb(174 159 231)"
                : "1px solid rgb(58 255 30)"
            }`,
            color: "rgb(129 117 173)",
          }}
        >
          {acceptedFiles.length === 0 ? "Upload" : "Selected"}
        </Button>
      </div>
    </Box>
  );
};

export default BannerUploader;
