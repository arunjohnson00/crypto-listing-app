import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = ({ placeholder, searchHandler, searchValue }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label=""
        size="small"
        placeholder={placeholder}
        value={searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e: any) => {
          searchHandler(e.target.value);
        }}
      />
    </ThemeProvider>
  );
};

export default InputSearch;
