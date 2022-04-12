import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const BannerUploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
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
            background: "rgb(239, 235, 255)",
            border: "1px solid rgb(174 159 231)",
            color: "rgb(129 117 173)",
          }}
        >
          Delete
        </Button>
      </div>
    </Box>
  );
};

export default BannerUploader;
