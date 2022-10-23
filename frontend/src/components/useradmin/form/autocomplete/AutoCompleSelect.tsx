import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Typography, Box, Avatar, Stack } from "@mui/material";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import {
  dashboardAirdropsCoinListRequest,
  dashboardEventsCoinListRequest,
} from "../../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const AutoCompleSelect = ({
  inputAutoValue,
  setInputAutoValue,
  serverRef,
  variant,
  filterType,
  title,
}: any) => {
  const dispatch: any = useDispatch();

  const [opt, setOpt] = useState<any>();
  const [defaultVal, setDefaultval] = useState<any>();

  useEffect(() => {
    const successHandler = (res: any) => {
      setOpt(res?.data?.data && res?.data?.data);
    };
    const errorHandler: any = (err: any) => {};
    variant &&
      variant === "coin" &&
      dispatch(
        dashboardEventsCoinListRequest(
          "emptyData",
          successHandler,
          errorHandler
        )
      );

    variant &&
      variant === "airdrop" &&
      dispatch(
        dashboardAirdropsCoinListRequest(
          "emptyData",
          successHandler,
          errorHandler
        )
      );

    // variant &&
    //   variant === "nft" &&
    //   dispatch(allNftListingRequest("emptyData", successHandler, errorHandler));
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

  const options = [
    variant === "nft"
      ? "loading..."
      : variant === "coin"
      ? "loading..."
      : variant === "airdrop" && "loading...",
  ];

  // const requestSendHandler: any = (itemId: any) => {
  //   const successHandler = (res: any) => {};
  //   const errorHandler = (err: any) => {};
  //   filterType === "airdrop" &&
  //     dispatch(
  //       airDropListSearchWithCoinSearchRequest(
  //         itemId,
  //         successHandler,
  //         errorHandler
  //       )
  //     );
  //   filterType === "events" &&
  //     dispatch(
  //       eventsListSearchWithCoinSearchRequest(
  //         itemId,
  //         successHandler,
  //         errorHandler
  //       )
  //     );
  // };
  return (
    <Autocomplete
      // disablePortal
      // defaultValue={`${defaultVal !== undefined && defaultVal}`}
      disableClearable
      disablePortal
      popupIcon={<SearchIcon />}
      value={`${
        defaultVal !== undefined
          ? defaultVal
          : inputAutoValue?.item_name
          ? inputAutoValue?.item_name
          : variant === "nft"
          ? title
            ? title
            : "Please Choose"
          : (variant === "coin" || variant === "airdrop") && title
          ? title
          : "Please Choose"
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
          coin_id: filter[0]?.id,
          item_name: variant === "nft" ? filter[0]?.title : filter[0]?.name,
          logo: filter[0]?.logo,
        });
        // requestSendHandler(filter[0]?.id);
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
          spacing={0}
          sx={{
            paddingY: 0,
            backgroundColor: "#010619",
            borderRadius: 0,
            border: "1.5px solid #05114c",
            color: "#FFFFFF",
            height: 40,
          }}
          px={2}
          alignItems="center"
        >
          {/* <Avatar
            alt={option}
            src={`${serverAPIUrl}public/uploads/coin_logo/${option}`}
            sx={{ width: 20, height: 20 }}
          /> */}

          <Typography {...props} sx={{ fontSize: ".8rem", flexGrow: 1 }}>
            {option}
          </Typography>
        </Stack>
      )}
      sx={{
        [`& .${autocompleteClasses.popupIndicator}`]: {
          transform: "none",
        },
        width: "auto",
        marginBottom: 1,
        fontSize: ".8rem",
        // backgroundColor: "#010619",

        "&$focus": {
          border: "1px solid rgb(200, 200, 200)",
        },
        "& .MuiOutlinedInput-root": {
          width: "260px",
          padding: 0,
          paddingLeft: 2,
          paddingRight: 0,
          height: "39px",

          fontSize: ".8rem",
          background: "#010619",
          borderRadius: "7px",
          color: "#525562",
          border: "1px solid #090F2C",
          ".MuiSvgIcon-root": {
            color: "#FFFFFF",
          },
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
