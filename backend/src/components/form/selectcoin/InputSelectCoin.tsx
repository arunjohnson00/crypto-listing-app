import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";
import { Fragment, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Avatar,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuProps } from "./style";

const InputSelectCoin = ({
  name,
  id,
  data,
  selectedValue,
  variant,
  height,
  width,
  type,
  title,
}: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <>
      {/* <FormControl fullWidth>
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
    </FormControl> */}

      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value === "" && selectedValue ? selectedValue : value}
          onChange={handleChange}
          name={name}
          defaultValue={selectedValue && selectedValue}
          renderValue={(selected: any) =>
            !selected
              ? title
                ? title
                : "Please Select"
              : data
                  ?.filter((item: any) => item?.id === selected)
                  .map((x: any) =>
                    type === "events"
                      ? x.title
                      : type === "airdrop"
                      ? x.name
                      : type === "currency"
                      ? x.name
                      : x.name
                  )
          }
          displayEmpty={true}
          inputProps={{
            name: `${name}`,
            id: `${id}`,
          }}
          sx={{
            background: "#FFFFFF",
            borderRadius: "7px",
            color: "#525562",
            //border: "1px solid #090F2C",
            height: height && height,
            minWidth: matches === true ? width : "auto",
            width: matches === true ? width : "auto",
            fontSize: ".85rem",
            fontWeight: 500,
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
              paddingY: 0,
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "&.MuiMenu-list ": { padding: 0 },
          }}
          MenuProps={MenuProps}
          IconComponent={() => <ArrowDropDownIcon sx={{ color: "#000000" }} />}
        >
          {data &&
            data.map((list: any, index: number) => {
              return (
                <MenuItem
                  value={list.id}
                  key={index}
                  sx={{
                    background:
                      selectedValue && selectedValue === list.id
                        ? "#e5e5e5"
                        : "#FFFFFF",
                    color: "#000000",
                    borderBottom: "1px solid #eeeeef",
                    textIndent: 5,
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    px={1}
                    py={0.5}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 20, height: 20 }}
                    />
                    <Typography sx={{ fontSize: ".9rem" }}>
                      {type === "events"
                        ? list.title
                        : type === "airdrop"
                        ? list.name
                        : list.name}{" "}
                      {variant === "search_with_coin" &&
                        type === "airdrop" &&
                        `(${list?.total_amount})`}
                    </Typography>
                  </Stack>
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
};

export default InputSelectCoin;
