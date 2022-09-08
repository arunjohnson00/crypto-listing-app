import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Stack } from "@mui/material";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const RadioBtnGroup = ({ radioValue, setRadioValue, name }: any) => {
  console.log(radioValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    name === "is_follow_twitter" &&
      setRadioValue({
        ...radioValue,
        is_follow_twitter: (event.target as HTMLInputElement).value,
      });

    name === "join_telegram" &&
      setRadioValue({
        ...radioValue,
        join_telegram: (event.target as HTMLInputElement).value,
      });
  };

  return (
    <RadioGroup
      name="use-radio-group"
      defaultValue="2"
      value={
        (name === "join_telegram" && radioValue.join_telegram) ||
        (name === "is_follow_twitter" && radioValue.is_follow_twitter)
      }
      onChange={handleChange}
      sx={{ color: "#FFFFFF" }}
    >
      <Stack direction="row">
        <MyFormControlLabel
          value="2"
          label="No"
          control={
            <Radio
              size="small"
              name={name}
              checked={
                (name === "join_telegram" &&
                  parseInt(radioValue.join_telegram) === 2 &&
                  true) ||
                (name === "is_follow_twitter" &&
                  parseInt(radioValue.is_follow_twitter) === 2 &&
                  true)
              }
              sx={{ color: "#FFFFFF" }}
            />
          }
        />
        <MyFormControlLabel
          value="1"
          label="Yes"
          control={
            <Radio
              size="small"
              name={name}
              checked={
                (name === "join_telegram" &&
                  parseInt(radioValue.join_telegram) === 1 &&
                  true) ||
                (name === "is_follow_twitter" &&
                  parseInt(radioValue.is_follow_twitter) === 1 &&
                  true)
              }
              sx={{ color: "#FFFFFF" }}
            />
          }
        />
      </Stack>
    </RadioGroup>
  );
};

export default RadioBtnGroup;
