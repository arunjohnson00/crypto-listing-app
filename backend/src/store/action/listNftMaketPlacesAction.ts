import appRequest from "../../utils/fetchhandler";
import { NFT_MARKETPLACES } from "../types";

export const listNftMarketPlacesRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces`,
    method: "GET",
    secure: true,
    actionType: NFT_MARKETPLACES.LIST_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
