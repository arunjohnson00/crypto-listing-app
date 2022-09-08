import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

const CheckboxWithLabel = ({ label, name, value }: any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    value && value === 1 ? setChecked(true) : setChecked(false);
  }, [value]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            value={checked ? 1 : 2}
            name={name}
            sx={{
              color: "#FFFFFF",
              "&.Mui-checked": {
                color: "#FFFFFF",
              },
            }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CheckboxWithLabel;
