import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";
import { Fragment } from "react";

const InputSelectCoin = ({ name, id, data, selectedValue }: any) => {
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={selectedValue && selectedValue}
        inputProps={{
          name: `${name}`,
          id: `${id}`,
        }}
        sx={{
          background: "white",
          borderRadius: "7px",
          border: "1px solid black",
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
                    style={{ background: "red", color: "white" }}
                  >
                    {`${list.name} (Selected) `}
                  </option>
                )}
                <option value={list.id}>{list.name}</option>
              </Fragment>
            );
          })}
      </NativeSelect>
    </FormControl>
  );
};

export default InputSelectCoin;
