import { useEffect, useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { viewNftListingCurrencyRequest } from "../../../store/action";

import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const NftTokenCurrencyView = () => {
  const [viewNftListingCurrency, setViewNftListingCurrency] = useState({
    name: "",
    status: "",
    symbol: "",
  });
  let { id } = useParams();
  const dispatch = useDispatch();

  const nftEventCurrencyView = useSelector((nftCurrencyView: any) => {
    return nftCurrencyView.nftListingCurrencyReducer.viewNftListingCurrency
      .data;
  });

  const navigate = useNavigate();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewNftListingCurrency({
        ...viewNftListingCurrency,
        ...res.data.data,
      });
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      viewNftListingCurrencyRequest({ id: id }, successHandler, errorHandler)
    );
  }, [dispatch, id]);

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  return (
    <div>
      {" "}
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HorizonatalList />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/nft-listing-currency");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              View NFT Event Currency List
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
            pt={3}
            pl={4}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Event currency Title
              </Typography>

              <InputText
                placeholder="Enter Currency Name"
                value={viewNftListingCurrency?.name}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Event currency Symbol
              </Typography>

              <InputText
                placeholder="Enter Currency Symbol"
                value={viewNftListingCurrency?.symbol}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              {viewNftListingCurrency?.status}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default NftTokenCurrencyView;
