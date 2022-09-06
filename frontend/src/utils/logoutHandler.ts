import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogoutRequest } from "../store/action";

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
    sessionStorage.clear();
    localStorage.clear();
    navigate("/login");
  };
  const errorHandler = (err: any) => {};
  dispatch(userLogoutRequest("emptyData", successHandler, errorHandler));
};
