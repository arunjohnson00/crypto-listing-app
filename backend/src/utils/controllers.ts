import axios from "axios";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const LoginSend: any = () =>
  axios({
    method: "post",
    url: `${serverAPIUrl}api/api/b/v1/auth/check`,
    data: {
      email: "admin@admin.com",
      password: "password",
    },
  });
