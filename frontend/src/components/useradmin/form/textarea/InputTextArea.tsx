import { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import { useMediaQuery } from "@mui/material";

const InputTextArea = ({ name, id, placeholder, value }: any) => {
  const [textAreaValue, setTextAreaValue] = useState(value);
  const matches = useMediaQuery("(min-width:900px)");
  useEffect(() => {
    setTextAreaValue(value);
  }, [value]);

  return (
    <>
      {matches === true ? (
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
      ) : (
        <TextareaAutosize
          aria-label="minimum height"
          minRows={rowCount}
          placeholder={placeholder}
          style={{
            minWidth: "84%",
            //maxWidth: 500,
            background: "#010619",
            borderRadius: "8px",
            color: "#ffffffe8",
            fontSize: ".9rem",
            borderColor: "#090F2C",
            padding: "10px 20px 10px 20px",
            fontWeight: 500,
          }}
          name={name}
          id={id}
          value={textAreaValue}
          onChange={(e: any) => {
            setTextAreaValue(e.target.value);
          }}
        />
      )}
    </>
  );
};

export default InputTextArea;
