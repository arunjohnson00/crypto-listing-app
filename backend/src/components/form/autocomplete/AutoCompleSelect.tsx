import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Autocomplete,
  Typography,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import { allCoinRequest } from "../../../store/action";
import { allNftListingRequest } from "../../../store/action";
const serverAPIUrl = process.env.REACT_APP_API_URL;

const AutoCompleSelect = ({
  inputAutoValue,
  setInputAutoValue,
  serverRef,
  variant,
}: any) => {
  const dispatch: any = useDispatch();

  const [opt, setOpt] = useState<any>();
  const [defaultVal, setDefaultval] = useState<any>();

  console.log(opt);
  useEffect(() => {
    const successHandler = (res: any) => {
      setOpt(res?.data?.data && res?.data?.data);
    };
    const errorHandler: any = (err: any) => {};
    variant &&
      variant === "coin" &&
      dispatch(allCoinRequest("emptyData", successHandler, errorHandler));

    variant &&
      variant === "nft" &&
      dispatch(allNftListingRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  useEffect(() => {
    const defaultCoinFilter =
      opt &&
      opt?.length !== 0 &&
      opt?.filter((dfltData: any) => {
        return dfltData?.id === serverRef;
      });
    serverRef &&
      serverRef !== undefined &&
      setDefaultval(
        defaultCoinFilter &&
          defaultCoinFilter !== undefined &&
          defaultCoinFilter[0]?.name
      );
  }, [opt, serverRef]);

  const options = ["Coins Not Found"];
  return (
    <Autocomplete
      // disablePortal
      // defaultValue={`${defaultVal !== undefined && defaultVal}`}
      value={`${
        defaultVal !== undefined
          ? defaultVal
          : inputAutoValue?.item_name
          ? inputAutoValue?.item_name
          : "Please Choose a Coin"
      }`}
      id="combo-box-demo"
      size="small"
      onChange={(event: any, newValue: string | null) => {
        const filter =
          opt &&
          opt?.length !== 0 &&
          opt?.filter((flData: any) => {
            return variant === "nft"
              ? flData?.title === newValue
              : flData?.name === newValue;
          });
        setInputAutoValue({
          ...inputAutoValue,
          item_id: filter[0]?.id,
          item_name: variant === "nft" ? filter[0]?.title : filter[0]?.name,
          logo: filter[0]?.logo,
        });
      }}
      options={
        opt && opt?.length !== 0 && opt !== undefined
          ? opt?.map((option: any) =>
              variant === "nft" ? option?.title : option?.name
            )
          : options
      }
      renderOption={(props, option) => (
        <Stack
          direction="row"
          spacing={-1}
          sx={{ paddingY: 0.2 }}
          alignItems="center"
        >
          {/* <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 20, height: 20 }}
          /> */}

          <Typography {...props} sx={{ fontSize: ".8rem" }}>
            {option}
          </Typography>
        </Stack>
      )}
      sx={{
        width: "auto",
        marginBottom: 1,
        fontSize: ".8rem",

        "&$focus": {
          border: "1px solid rgb(200, 200, 200)",
        },
        "& .MuiOutlinedInput-root": {
          width: "260px",
          padding: 0,
          paddingLeft: 2,
          paddingRight: 0,
          height: "39px",
          borderRadius: "8px",
          fontSize: ".8rem",
          background: "white",
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="select coins"
          sx={{ fontSize: ".8rem" }}
        />
      )}
    />
  );
};

export default AutoCompleSelect;
