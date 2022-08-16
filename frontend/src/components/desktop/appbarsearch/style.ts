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
    border: 1px solid #6252E8;
    border-radius: 4px;
    background: #01061A;
    align-items: center;
    justify-content: center;

  
    &.${inputUnstyledClasses.focused} {
      outline: 1px solid #6252E8;
    }
  
    &:hover {
      background: #272727};
      
    }
  `
);

export const StyledInputPopUpRoot = styled("div")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    display: flex;
    font-weight: 500;
    border-radius: 4px;
    background: #000000;
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
    height:0px
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
