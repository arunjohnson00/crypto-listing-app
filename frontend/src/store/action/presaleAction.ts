import appRequest from "../../utils/fetchhandler";
import { PRESALE } from "../types";

export const presalePageListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale?page=${values}`,
    method: "GET",
    secure: false,
    actionType: PRESALE.PRESALE_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
