import { Fragment, useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import { useMediaQuery } from "@mui/material";
import RichTextEditor from "react-rte";
import "./styel.css";
const InputTextArea = ({
  name,
  id,
  placeholder,
  value,
  variant,
  width,
}: any) => {
  const [textAreaValue, setTextAreaValue] = useState(value);
  const [richEditorValue, setRichEditorValue] = useState<any>(
    RichTextEditor.createValueFromString(
      placeholder ? placeholder : "Enter  details.",
      "html"
    )
  );
  const matches = useMediaQuery("(min-width:900px)");

  const richEditorHandler = (value: any) => {
    console.log(value.toString("html"));
    setRichEditorValue(value);
  };
  useEffect(() => {
    setTextAreaValue(value);
  }, [value]);

  return (
    <Fragment>
      {variant === "richtext" ? (
        <RichTextEditor value={richEditorValue} onChange={richEditorHandler} />
      ) : (
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
                minWidth: "-webkit-fill-available",
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
      )}
    </Fragment>
  );
};

export default InputTextArea;
