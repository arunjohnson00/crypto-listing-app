import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";

const InputTextArea = ({ name, id, placeholder, value }: any) => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={rowCount}
      placeholder={placeholder}
      style={textareaStyle}
      name={name}
      id={id}
      value={value}
    />
  );
};

export default InputTextArea;
