import { Fragment, useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { textareaStyle, rowCount } from "./style";
import "./style.css";
import { useMediaQuery } from "@mui/material";
// import RichTextEditor from "react-rte";
import striptags from "striptags";

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
    setData({ ...data, search_ad_description: value });
    (variant === "richtext" || variant === "richtextdescription") &&
      setRichText({
        ...richText,
        details: data?.details,
        description: data?.description,
      });
  }, [value]);

  console.log(data?.description);
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
        (variant = "ad_wizard" ? (
          <TextareaAutosize
            aria-label="minimum height"
            minRows={rowCount}
            placeholder={placeholder}
            style={textareaStyle}
            name={name}
            id={id}
            value={data?.search_ad_description}
            onChange={(e: any) => {
              setTextAreaValue(e.target.value);
              setData({ ...data, search_ad_description: e.target.value });
            }}
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
        ))
      )}
    </Fragment>
  );
};

export default InputTextArea;
