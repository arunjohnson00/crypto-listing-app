import axios from "axios";

const serverAPIUrl = process.env.REACT_APP_API_URL;

export const loginRequest: any = async (
  authCredentials: object,
  reDirectHandler: any
) => {
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
      reDirectHandler(response.data.access_token);
    })
    .catch((error) => console.log(error));
};
