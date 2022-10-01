import { Fragment, useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Checkbox, useMediaQuery } from "@mui/material";
import { ListItemText } from "@mui/material";
import { toast } from "material-react-toastify";
import { isArray } from "lodash";

const getStyles = (
  option: string,
  getInputSelectMultiplevalue: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      getInputSelectMultiplevalue.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const InputSelectMultiple = ({
  selectOptions,
  currentStatus,
  setInputSelectMultipleValue,
  getInputSelectMultiplevalue,
  name,
  serverMultiRef,
}: any) => {
  const [serverValue, setServerValue] = useState<any>({});
  const matches = useMediaQuery("(min-width:900px)");
  //console.log(pluck(serverMultiRef, "category_id")); // even shorter);

  const pluck = (array: any, key: any) => array?.map((a: any) => a[key]);

  // console.log(isArray(pluck(serverMultiRef && serverMultiRef, "category_id")));

  // console.log(getInputSelectMultiplevalue);

  useEffect(() => {
    getInputSelectMultiplevalue !== undefined &&
      serverMultiRef !== undefined &&
      setInputSelectMultipleValue([
        ...getInputSelectMultiplevalue,
        ...[
          ...pluck(serverMultiRef && serverMultiRef, "category_id")
            .toString()
            .split(",")
            .map((i: any) => Number(i)),
        ],
      ]);
  }, [serverMultiRef]);

  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  // let optionSelected = selectOptions.filter(
  //   (optionData: any) => optionData.value === currentStatus
  // );

  // console.log(optionSelected);

  const handleChange = (
    event: SelectChangeEvent<typeof getInputSelectMultiplevalue>
  ) => {
    const {
      target: { value },
    } = event;
    console.log(
      selectOptions
        .filter((x: any) => parseInt(x.id) === parseInt(value))
        .map((x: any) => x.name)
    );

    setInputSelectMultipleValue(
      // On autofill we get a stringified value.

      value && typeof value === "string" ? value.split(",") : value
    );
    //${optionSelected[0].title}

    // toast.warn(`Category Selected  `, {
    //   position: "top-right",
    //   autoClose: 7000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
  };
  console.log(selectOptions);
  return (
    <FormControl
      sx={{ m: 1, minWidth: matches === true ? 300 : "100%", mt: 0 }}
    >
      <Select
        multiple
        displayEmpty
        id="demo-multiple-chip"
        value={getInputSelectMultiplevalue}
        onChange={handleChange}
        //  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        inputProps={{ "aria-label": "Without label" }}
        name={name}
        sx={{
          height: "auto",
          width: "auto",

          fontSize: "14px",
          fontWeight: "100",
          fontStyle: "normal",
          background: "#010619",
          borderRadius: "7px",
          color: "#FFFFFF",
          border: "1px solid #090F2C",
          ".MuiSelect-icon": {
            color: "#FFFFFF",
          },
        }}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {console.log(selected)}
            {selectOptions &&
              selectOptions
                .filter(
                  (x: any, i: any, a: number) =>
                    parseInt(x.id) ===
                    selected[selected.findIndex((item: any) => item === x.id)]
                )
                .map((value: any) => (
                  <Chip
                    key={value.id}
                    label={value.name}
                    sx={{ color: "#FFFFFF", backgroundColor: "red" }}
                  />
                ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {selectOptions?.map((option: any, index: number) => {
          return (
            <MenuItem
              key={index}
              value={option.id}
              style={getStyles(option, getInputSelectMultiplevalue, theme)}
            >
              <Checkbox
                checked={getInputSelectMultiplevalue.indexOf(option.id) > -1}
              />

              <ListItemText primary={option.name} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputSelectMultiple;
