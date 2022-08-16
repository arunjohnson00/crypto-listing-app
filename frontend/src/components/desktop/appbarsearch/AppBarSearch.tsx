import * as React from "react";
import Box from "@mui/material/Box";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { StyledInputRoot, StyledInputPopUpRoot } from "./style";
import { StyledInputElement } from "./style";
import { InputAdornment } from "./style";
import { IconButton } from "./style";
import { Avatar, Popover, Stack, Typography } from "@mui/material";

import TrendingIcon from "../../../assets/search/trending_icon.svg";

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
      style={{
        color: "#FFFFFF",
      }}
    />
  );
});

const CustomInputPopup = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputPopUpRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
      style={{
        color: "#FFFFFF",
      }}
    />
  );
});

const AppBarSearch = () => {
  const [values, setValues] = React.useState<any>();

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues(event.target.value);
    };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
      <CustomInput
        id="outlined-adornment-password"
        type="text"
        value={values}
        placeholder="Search"
        onClick={handleClick}
        disabled
        style={{ height: 34, color: "#FFFFFF" }}
        startAdornment={
          <InputAdornment>
            <IconButton edge="end">
              {
                <SearchIcon
                  style={{ color: "#6252E7", fontSize: "1.4rem" }}
                  sx={{ margin: 0 }}
                />
              }
            </IconButton>
          </InputAdornment>
        }
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: -1,
          horizontal: -2,
        }}
        PaperProps={{
          style: {
            width: 380,
            backgroundColor: "#000000",
            color: "#9b9b9b",
            border: "1px solid #6252E8",
            borderRadius: 10,
          },
        }}
        sx={{ borderRadius: 10 }}
      >
        <CustomInputPopup
          id="outlined-adornment-password"
          type="text"
          value={values}
          placeholder="Search coin, pair, contract address or exchange"
          onChange={(e: any) => handleChange(e)}
          style={{
            height: 34,
            color: "#FFFFFF",
          }}
          startAdornment={
            <InputAdornment>
              <IconButton edge="end">
                {<SearchIcon style={{ color: "#6252E7" }} sx={{ margin: 0 }} />}
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment>
              <IconButton edge="end" onClick={handleClose}>
                {
                  <CancelIcon
                    style={{ color: "#ffffffad" }}
                    sx={{ margin: 0, fontSize: "1.1rem" }}
                  />
                }
              </IconButton>
            </InputAdornment>
          }
        />
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography sx={{ pl: 2, py: 2, fontSize: ".7rem" }}>
            Trending
          </Typography>
          <Avatar
            alt="Trending"
            src={TrendingIcon}
            sx={{ width: 14, height: 14 }}
          />
        </Stack>

        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography sx={{ pl: 2, py: 2, fontSize: ".7rem" }}>
            Recent Searches
          </Typography>
          {/* <Avatar
            alt="Trending"
            src={TrendingIcon}
            sx={{ width: 14, height: 14 }}
          /> */}
        </Stack>
      </Popover>
    </Box>
  );
};

export default AppBarSearch;
