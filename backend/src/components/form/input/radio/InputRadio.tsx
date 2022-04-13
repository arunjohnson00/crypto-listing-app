import { useState } from "react";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { BpIcon, BpCheckedIcon } from "./style";

function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const InputRadio = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl>
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{ fontWeight: "bold" }}
      >
        Coin Status
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ paddingTop: "20px" }}
      >
        <FormControlLabel
          value="Presale"
          control={<BpRadio />}
          label="Presale"
        />
        <FormControlLabel
          value="Launched"
          control={<BpRadio />}
          label="Launched"
          sx={{ marginLeft: "40px" }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default InputRadio;
