import { Fragment, useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import { useMediaQuery } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import striptags from "striptags";
import "./styel.css";
const InputTextArea = ({
  name,
  id,
  placeholder,
  value,
  variant,
  width,
  data,
  setData,
  richText,
  setRichText,
}: any) => {
  const [textAreaValue, setTextAreaValue] = useState(value);

  const matches = useMediaQuery("(min-width:900px)");

  const richEditorHandler = (value: any) => {
    setRichText({ ...richText, details: value, description: value });
  };
  useEffect(() => {
    setTextAreaValue(value);
    (variant === "richtext" || variant === "richtextdescription") &&
      setRichText({
        ...richText,
        details: data?.details,
        description: data?.description,
      });
  }, [value, data]);

  return (
    <Fragment>
      {variant === "richtext" ? (
        <ReactQuill
          theme="snow"
          value={richText?.details}
          onChange={richEditorHandler}
          placeholder={placeholder && placeholder}
        />
      ) : variant === "richtextdescription" ? (
        <ReactQuill
          theme="snow"
          value={richText?.description}
          onChange={richEditorHandler}
          placeholder={placeholder && placeholder}
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
