export const logoutHandler = (navigate: any) => {
  sessionStorage.clear();
  localStorage.clear();
  navigate("/");
};
