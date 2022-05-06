import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NFTListingView = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const nftListingsList = useSelector((nftList: any) => {
    return nftList.listNftLisingsReducer.nftListingsListAll.data;
  });

  let newArrList = nftListingsList.filter(
    (listData: any) => listData.id === location.state.id
  );
  console.log(newArrList);

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
                navigate("/nft-listings");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View Nft MarketPlace
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
              src={`${serverAPIUrl}public/uploads/nft_marketplace_icons/${newArrList[0].thumb_icon}`}
              alt={newArrList[0].thumb_icon}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Nft Name
            </Typography>

            <InputText
              placeholder="Enter Nft Name"
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Nft URL
            </Typography>

            <InputText placeholder="Enter Nft url" value={newArrList[0].url} />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NFTListingView;