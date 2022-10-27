import { Fragment, useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import "./style.css";
import { useMediaQuery } from "@mui/material";
// import RichTextEditor from "react-rte";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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

  const matches = useMediaQuery("(min-width:900px)");

  const richEditorHandler = (value: any) => {
    setData({ ...data, details: value, description: value });
  };
  useEffect(() => {
    setTextAreaValue(value);
  }, [value]);
  return (
    <Fragment>
      {variant === "richtext" ? (
        <ReactQuill
          theme="snow"
          value={data?.details}
          onChange={richEditorHandler}
          placeholder={placeholder && placeholder}
        />
      ) : variant === "richtextdescription" ? (
        <ReactQuill
          theme="snow"
          value={data?.description}
          onChange={richEditorHandler}
          placeholder={placeholder && placeholder}
        />
      ) : (
        // <RichTextEditor value={richEditorValue} onChange={richEditorHandler} />
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
