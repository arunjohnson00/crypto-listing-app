import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { allCoinRequest } from "../../../store/action";
import { useDispatch } from "react-redux";

const AutoCompleSelect = ({
  inputAutoValue,
  setInputAutoValue,
  serverRef,
}: any) => {
  const dispatch: any = useDispatch();

  const [opt, setOpt] = useState<any>();

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);

      setOpt(res?.data?.data && res?.data?.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(allCoinRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  //   const filterMount =
  //     opt &&
  //     opt.length !== 0 &&
  //     opt?.filter((flDataMount: any) => {
  //       return parseInt(flDataMount?.id) === parseInt(serverRef && serverRef);
  //     });

  //   const [value, setValue] = useState(opt && filterMount[0]?.name);
  //   console.log(serverRef && serverRef);

  //   useEffect(() => {
  //     setValue(opt && filterMount[0].name);
  //   }, [opt, serverRef, filterMount]);
  console.log(opt);
  return (
    <Autocomplete
      // disablePortal

      id="combo-box-demo"
      onChange={(event: any, newValue: string | null) => {
        const filter =
          opt &&
          opt.length !== 0 &&
          opt?.filter((flData: any) => {
            return flData?.name === newValue;
          });
        setInputAutoValue({ ...inputAutoValue, coin_id: filter[0]?.id });
      }}
      options={
        opt &&
        opt.length !== 0 &&
        opt !== undefined &&
        opt?.map((option: any) => option?.name)
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
