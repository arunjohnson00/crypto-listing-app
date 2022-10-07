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
      backgroundColor: "#010619",
      borderRadius: 10,
      border: "1px solid #100d29",

      sx: {
        "&& .Mui-selected": {
          backgroundColor: "pink",
        },
      },
    },
  },
};
