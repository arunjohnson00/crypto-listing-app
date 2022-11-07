export const ITEM_HEIGHT = 32;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  MenuListProps: {
    disablePadding: true,
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,

      width: "auto",
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
