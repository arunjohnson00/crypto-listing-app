import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS } from "../types";

export const updateNftListingsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.UPDATE_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
