import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { toast } from "material-react-toastify";

const InputSelectCoin = ({ name, id, data }: any) => {
  console.log(data);
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: `${name}`,
          id: `${id}`,
        }}
      >
        {data &&
          data.map((list: any) => {
            return <option value={list.id}>{list.name}</option>;
          })}
      </NativeSelect>
    </FormControl>
  );
};

export default InputSelectCoin;
