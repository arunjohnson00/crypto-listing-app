import { useState, useEffect } from "react";
import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { viewNetworkRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NFTNetworkView = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();

  let { id } = useParams();

  const [nftnetworksData, setNFTNetorkData] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    chain_id: "",
    explorer_url: "",
    currency_symbol: "",
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      setNFTNetorkData(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewNetworkRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton>
            <ArrowBackIosTwoToneIcon
              onClick={() => {
                navigate("/nft-networks");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View NFT Networks
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
            <img
              src={`${serverAPIUrl}public/uploads/nftnetworks_icons/t/${nftnetworksData?.thumb_icon}`}
              alt={nftnetworksData?.thumb_icon}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              NFT Network Name
            </Typography>

            <InputText
              placeholder="Enter NFT Network Name"
              value={nftnetworksData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              value={nftnetworksData?.url}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain Id"
              value={nftnetworksData?.chain_id}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Explorer URL
            </Typography>

            <InputText
              placeholder="Enter Explorer URL"
              value={nftnetworksData?.explorer_url}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter Currency Symbol"
              value={nftnetworksData?.currency_symbol}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NFTNetworkView;
