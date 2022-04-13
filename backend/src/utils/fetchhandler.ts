import axios from "axios";

const serverAPIUrl = process.env.REACT_APP_API_URL;

export const loginRequest: any = async (
  authCredentials: any,
  reDirectHandler: any,
  LoginError: any
) => {
  console.log(authCredentials.remember);
  await axios({
    method: "post",
    url: `${serverAPIUrl}api/b/v1/auth/login
      `,
    data: authCredentials,
  })
    .then((response) => {
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
    })
    .catch((error) => LoginError(error));
};
