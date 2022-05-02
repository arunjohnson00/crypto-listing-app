import appRequest from "../../utils/fetchhandler";
import { NFT_MARKETPLACES } from "../types";

export const addNftMarketPlacesRequest = (
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
    actionType: NFT_MARKETPLACES.ADD_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
