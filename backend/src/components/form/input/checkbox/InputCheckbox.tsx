import Checkbox from "@mui/material/Checkbox";

const InputCheckbox = ({
  checked,
  setChecked,
  condition,
  name,
  id,
  value,
  serverCheckedRef,
}: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    condition === "launch_date" && setChecked(event.target.checked);

    condition === "is_listed_coingecko" &&
      setChecked({
        ...checked,
        is_listed_coingecko: !checked.is_listed_coingecko,
      });

    condition === "is_listed_market_cap" &&
      setChecked({
        ...checked,
        is_listed_market_cap: !checked.is_listed_market_cap,
      });

    condition === "i_agree" &&
      setChecked({ ...checked, i_agree: !checked.i_agree });
    condition === "i_declare" &&
      setChecked({ ...checked, i_declare: !checked.i_declare });
  };

  return (
    <Checkbox
      checked={
        serverCheckedRef && serverCheckedRef === 1
          ? !value
          : serverCheckedRef === 2
          ? !value
          : value
      }
      value={value === true || serverCheckedRef === 1 ? 1 : 0}
      name={name}
      id={id}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      sx={{
        color: "rgb(54, 48, 98)",
        "&.Mui-checked": {
          color: "rgb(54, 48, 98)",
        },
        "& .MuiSvgIcon-root": { fontSize: 24 },
      }}
    />
  );
};

export default InputCheckbox;
