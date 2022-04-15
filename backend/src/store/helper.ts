const initialValue = {
  pathExtention: "api/b/v1/auth/login",
};

export function appReducer(prevState: any = initialValue, action: any) {
  switch (action.type) {
    case "loginPath":
      return {
        ...prevState,
        pathExtention: "api/b/v1/auth/login",
      };

    default:
      return { ...prevState, default: "Not fetched" };
  }
}
