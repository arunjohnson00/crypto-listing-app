import { useEffect, useState } from "react";
import Radio, { RadioProps } from "@mui/material/Radio";
import { RadioGroup, FormControlLabel, FormControl } from "@mui/material";

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

const InputRadio = ({
  coinStatus,
  setCoinStatus,
  name,
  serverIsLanuched,
  serverIsPresale,
}: any) => {
  const [launched, setLaunched] = useState(serverIsLanuched);
  const [presale, setPresale] = useState(serverIsPresale);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinStatus((event.target as HTMLInputElement).value);
    setLaunched(0);
    setPresale(0);
  };

  useEffect(() => {
    setLaunched(serverIsLanuched);
    setPresale(serverIsPresale);
  }, [serverIsPresale, serverIsLanuched]);

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="controlled-radio-buttons-group"
        value={
          launched === 1 ? "Launched" : presale === 1 ? "Presale" : coinStatus
        }
        onChange={handleChange}
        sx={{ paddingTop: "20px" }}
      >
        <FormControlLabel
          value={"Presale"}
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
