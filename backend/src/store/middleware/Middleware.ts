export const middleWare = () => {
  return (next: any) => {
    return (action: any) => {
      console.log("Success");
    };
  };
};
