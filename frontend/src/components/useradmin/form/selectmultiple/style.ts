export const ITEM_HEIGHT = 32;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 174,
      backgroundColor: "#000000",
      borderRadius: 10,
      border: "1.5px solid #4b4b4b",

      sx: {
        "&& .Mui-selected": {
          backgroundColor: "pink",
        },
      },
    },
  },
};
