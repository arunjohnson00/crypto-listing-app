import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";

const InputTextArea = ({ name, id, placeholder }: any) => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={rowCount}
      placeholder={placeholder}
      style={textareaStyle}
      name={name}
      id={id}
    />
  );
};

export default InputTextArea;
