import { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";

const InputTextArea = ({ name, id, placeholder, value }: any) => {
  const [textAreaValue, setTextAreaValue] = useState(value);

  useEffect(() => {
    setTextAreaValue(value);
  }, [value]);

  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={rowCount}
      placeholder={placeholder}
      style={textareaStyle}
      name={name}
      id={id}
      value={textAreaValue}
      onChange={(e: any) => {
        setTextAreaValue(e.target.value);
      }}
    />
  );
};

export default InputTextArea;
