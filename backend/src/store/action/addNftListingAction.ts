import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS } from "../types";

export const addNftListingsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.ADD_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
