import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";
import { Fragment } from "react";

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
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={selectedValue && selectedValue}
        inputProps={{
          name: `${name}`,
          id: `${id}`,
        }}
        sx={{
          background: "#FFFFFF",
          borderRadius: "7px",
          border: "1px solid #bbbbbb",
          height: height && height,
          minWidth: width && width,
          fontSize: ".85rem",
          "&::before": {
            border: "none",
          },
          "&::after": {
            border: "none",
          },
          paddingLeft: "10px",
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
                <option value={list.id}>
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
