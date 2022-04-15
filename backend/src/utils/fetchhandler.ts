import axios from "axios";

const serverAPIUrl = process.env.REACT_APP_API_URL;

export const appRequest: any = async (
  authCredentials: any,
  reDirectHandler: any,
  LoginError: any,
  storeData: any
) => {
  await axios({
    method: "post",
    url: `${serverAPIUrl}${storeData.pathExtention}
      `,
    data: authCredentials,
  })
    .then((response) => {
      if (response.data.access_token) {
        //  console.log(storeData.pathExtention);

        sessionStorage.setItem(
          "authToken",
          JSON.stringify(response.data.access_token)
        );
        reDirectHandler(response);

        if (authCredentials.remember === true) {
          localStorage.setItem(
            "authToken",
            JSON.stringify(response.data.access_token)
          );
        }
      }
    })
    .catch((error) => LoginError(error));
};
