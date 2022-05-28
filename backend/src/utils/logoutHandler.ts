import { logOutRequest } from "../store/action";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export const logoutHandler = (navigate: any, dispatch: any) => {
  const successHandler = (res: any) => {
    toast.success(`${res.data.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const errorHandler = (err: any) => {};
  dispatch(logOutRequest("emptyData", successHandler, errorHandler));
  sessionStorage.clear();
  localStorage.clear();
  navigate("/");
};
