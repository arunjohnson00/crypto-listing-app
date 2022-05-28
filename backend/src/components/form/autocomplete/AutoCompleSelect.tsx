import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Autocomplete } from "@mui/material";

import { allCoinRequest } from "../../../store/action";

const AutoCompleSelect = ({
  inputAutoValue,
  setInputAutoValue,
  serverRef,
}: any) => {
  const dispatch: any = useDispatch();

  const [opt, setOpt] = useState<any>();
  const [defaultVal, setDefaultval] = useState<any>();

  useEffect(() => {
    const successHandler = (res: any) => {
      setOpt(res?.data?.data && res?.data?.data);
    };
    const errorHandler = (err: any) => {};
    dispatch(allCoinRequest("emptyData", successHandler, errorHandler));
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
          : inputAutoValue?.coin_name
          ? inputAutoValue?.coin_name
          : "Please Choose a Coin"
      }`}
      id="combo-box-demo"
      onChange={(event: any, newValue: string | null) => {
        const filter =
          opt &&
          opt?.length !== 0 &&
          opt?.filter((flData: any) => {
            return flData?.name === newValue;
          });
        setInputAutoValue({
          ...inputAutoValue,
          coin_id: filter[0]?.id,
          coin_name: filter[0]?.name,
        });
      }}
      options={
        opt && opt?.length !== 0 && opt !== undefined
          ? opt?.map((option: any) => option?.name)
          : options
      }
      sx={{
        width: "auto",
        marginBottom: 1,

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
          fontSize: "14px",
          background: "white",
        },
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="select coins" />
      )}
    />
  );
};

export default AutoCompleSelect;
