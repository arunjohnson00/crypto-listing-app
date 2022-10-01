import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";
import { Fragment } from "react";
import { Avatar, Box, useMediaQuery } from "@mui/material";
import "./style.css";

const InputSelectCoin = ({
  name,
  id,
  data,
  selectedValue,
  variant,
  height,
  width,
  type,
}: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={selectedValue && selectedValue}
        inputProps={{
          name: `${name}`,
          id: `${id}`,
        }}
        sx={{
          background: "#010619",
          borderRadius: "7px",
          color: "#525562",
          border: "1px solid #090F2C",
          height: height && height,
          minWidth: matches === true ? width : "auto",
          width: matches === true ? width : "auto",
          fontSize: ".85rem",
          "&::before": {
            border: "none",
          },
          "&::after": {
            border: "none",
          },
          ".MuiNativeSelect-icon": {
            color: "#FFFFFF",
          },
          paddingLeft: "10px",
          "&option": {
            paddingY: 2,
          },
        }}
      >
        {data &&
          data.map((list: any, index: number) => {
            return (
              <Fragment key={index}>
                {selectedValue && selectedValue === list.id && (
                  <option
                    value={list.id}
                    selected
                    style={{
                      background: "red",
                      color: "#FFFFFF",
                    }}
                  >
                    {`${list.name} (Selected) `}
                  </option>
                )}

                <option
                  value={list.id}
                  style={{
                    background: "#2B2C36",
                    color: "#FFFFFF",
                    textIndent: 5,
                  }}
                >
                  {type === "events"
                    ? list.title
                    : type === "airdrop"
                    ? list.name
                    : list.name}{" "}
                  {variant === "search_with_coin" &&
                    type === "airdrop" &&
                    `(${list?.total_amount})`}
                </option>
              </Fragment>
            );
          })}
      </NativeSelect>
    </FormControl>
  );
};

export default InputSelectCoin;
