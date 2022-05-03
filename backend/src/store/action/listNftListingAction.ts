import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS } from "../types";

export const listNftListingsRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces`,
    method: "GET",
    secure: true,
    actionType: NFT_LISTINGS.LIST_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
