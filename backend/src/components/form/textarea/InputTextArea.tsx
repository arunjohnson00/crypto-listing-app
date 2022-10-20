import { Fragment, useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import "./style.css";
import { useMediaQuery } from "@mui/material";
import RichTextEditor from "react-rte";
const InputTextArea = ({
  name,
  id,
  placeholder,
  value,
  variant,
  width,
  data,
  setData,
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
    setData({
      ...data,
      airdrop_details: value,
    });
  };
  console.log(data);
  return (
    <Fragment>
      {variant === "richtext-airdrop" ? (
        <RichTextEditor
          value={data?.airdrop_details}
          onChange={richEditorHandler}
        />
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
              style={textareaStyle}
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
