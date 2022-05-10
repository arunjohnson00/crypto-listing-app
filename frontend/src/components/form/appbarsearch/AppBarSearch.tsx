import * as React from "react";
import Box from "@mui/material/Box";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import SearchIcon from "@mui/icons-material/Search";

import { StyledInputRoot } from "./style";
import { StyledInputElement } from "./style";
import { InputAdornment } from "./style";
import { IconButton } from "./style";

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
    />
  );
});

const AppBarSearch = () => {
  //const [values, setValues] = React.useState<State>({});

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      //   setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
      <CustomInput
        id="outlined-adornment-password"
        type="text"
        value=""
        placeholder="Search Coin/ Airdrops/NFT/Address"
        onChange={handleChange("password")}
        style={{ height: "34px" }}
        startAdornment={
          <InputAdornment>
            <IconButton edge="end">
              {<SearchIcon style={{ color: "white" }} sx={{ margin: 0 }} />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default AppBarSearch;
