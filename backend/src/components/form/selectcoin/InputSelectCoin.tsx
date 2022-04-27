import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";

const InputSelectCoin = ({ name, id }: any) => {
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: `${name}`,
          id: `${id}`,
        }}
      >
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
  );
};

export default InputSelectCoin;
