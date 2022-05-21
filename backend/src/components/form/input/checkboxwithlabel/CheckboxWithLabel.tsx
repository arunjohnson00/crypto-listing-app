import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CheckboxWithLabel;
