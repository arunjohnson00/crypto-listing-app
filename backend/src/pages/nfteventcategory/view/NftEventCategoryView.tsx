import { useEffect, useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { viewNftListingCategoryRequest } from "../../../store/action";

import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const NftEventCategoryView = () => {
  const [viewNftListingCategory, setViewNftListingCategory] = useState({
    name: "",
    status: "",
  });
  let { id } = useParams();
  const dispatch = useDispatch();

  const nftEventCategoryView = useSelector((nftCategoryView: any) => {
    return nftCategoryView.nftListingCategoryReducer.viewNftListingCategory
      .data;
  });

  const navigate = useNavigate();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewNftListingCategory({
        ...viewNftListingCategory,
        ...res.data.data,
      });
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      viewNftListingCategoryRequest({ id: id }, successHandler, errorHandler)
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
                  navigate("/nft-listing-category");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              View NFT Event Category List
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
                Event category Title
              </Typography>

              <InputText
                placeholder="Enter audit Name"
                value={viewNftListingCategory?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              {viewNftListingCategory?.status}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default NftEventCategoryView;
