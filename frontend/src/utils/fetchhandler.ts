import axios from "axios";
// import { toast } from "material-react-toastify";
// import "material-react-toastify/dist/ReactToastify.css";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const appRequest = (
  {
    url,
    method = "GET",
    actionType,
    body,
    secure = false,
    fileUpload = false,
  }: any,
  successHandler: any = null,
  errorHandler: any = null
) => {
  const authToken: any =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  return (dispatch: any) => {
    const triggerSuccessHandler = (response: any) => {
      dispatch({
        type: actionType,
        payload: response,
      });
      if (
        response?.data?.token_status !== undefined &&
        response?.data?.token_status === 1
      ) {
        sessionStorage.clear();
        localStorage.removeItem("authUser");
        localStorage.removeItem("authToken");
        window.location.replace("/login");
      }
      return successHandler ? successHandler(response) : null;
    };

    const headersData = {
      Accept: fileUpload ? "multipart/form-data" : "application/json",
      "Content-Type": fileUpload ? "multipart/form-data" : "application/json",
    };

    let requestBody = body;
    if (method === "POST" && body !== "" && !fileUpload) {
      requestBody = JSON.stringify({
        ...JSON.parse(body),
      });
    }

    return axios({
      method: method,
      url: `${serverAPIUrl}${url}`,
      headers: {
        ...headersData,
        ...(secure && {
          Authorization: `Bearer ${authToken.replace(/['"]+/g, "")}`,
        }),
        "Access-Control-Allow-Origin": "*",
      },
      ...(method !== "GET" && { data: requestBody }),
    })
      .then((res) => {
        return triggerSuccessHandler(res);
      })
      .catch((err) => {
        const errorObj = {
          error: {
            url: `${serverAPIUrl}${url}`,
            code: "FETCH_FAILED",
            message: err,
          },
        };
        return errorHandler ? errorHandler(errorObj) : null;
      });
  };
};
export default appRequest;
