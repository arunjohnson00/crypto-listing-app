import { styled } from "@mui/system";
import { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    display: flex;
    font-weight: 500;
    border: 1px solid #1b2756;
    border-radius: 8px;
    background: #01061A;
    align-items: center;
    justify-content: center;
    cursor:text;
    width:320px;
    

  
    &.${inputUnstyledClasses.focused} {
      outline: 1px solid #1b2756;
      cursor:text;
    }
  
    &:hover {
      background: #01061A};
      cursor:text;
    }
  `
);

export const StyledInputPopUpRoot = styled("div")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    display: flex;
    font-weight: 500;
    border-radius: 4px;
    background: #0f0f0f;
    align-items: center;
    justify-content: center;

  
    &.${inputUnstyledClasses.focused} {
  
    }
  
    &:hover {
      };
      
    }
  `
);

export const StyledInputElement = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    flex-grow: 1;
    color: #9b9b9b;
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 8px 8px 0px;
    outline: 0;
    height:0px;
    cursor:text;
    height: 20px;

  
  `
);

export const IconButton = styled(ButtonUnstyled)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
`;

export const InputAdornment = styled("div")`
  margin: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
