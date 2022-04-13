import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";

const InputTextArea = () => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={rowCount}
      placeholder="Detailed project description"
      style={textareaStyle}
    />
  );
};

export default InputTextArea;
