import { Box, Rating } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Fragment, useEffect, useState } from "react";

const AnimatedRating = ({
  value,
  animated,
  size,
  fontSize,
  precision,
  defaultValue,
  readOnly,
  name,
}: any) => {
  const [animatedValue, setAnimatedValue] = useState<any>(0);

  useEffect(() => {
    setInterval(() => {
      setAnimatedValue(animatedValue + 1);
    }, 5000);
  }, [animatedValue, setAnimatedValue]);
  console.log(animatedValue);

  return (
    <Fragment>
      {animated === true && animatedValue ? (
        <Rating
          name={name && name}
          defaultValue={defaultValue && defaultValue}
          disabled
          value={animatedValue}
          readOnly={readOnly && readOnly}
          sx={{ fontSize: fontSize && fontSize }}
          //   onChange={(event, newValue) => {
          //     setRating(newValue);
          //   }}
          //   onChangeActive={(event, newHover) => {
          //     setHover(newHover);
          //   }}
          precision={precision && precision}
          size={size && size}
          icon={
            <StarRoundedIcon
              fontSize="inherit"
              sx={{
                color:
                  animatedValue <= 1
                    ? "#FF3722"
                    : animatedValue <= 2
                    ? "#FF8622"
                    : animatedValue <= 3
                    ? "#FFCE00"
                    : animatedValue <= 4
                    ? "#73CF11"
                    : animatedValue <= 5
                    ? "#00B67A"
                    : "#00B67A",
              }}
            />
          }
          emptyIcon={
            <StarBorderRoundedIcon
              fontSize="inherit"
              sx={{
                color:
                  animatedValue <= 1
                    ? "#FF3722"
                    : animatedValue <= 2
                    ? "#FF8622"
                    : animatedValue <= 3
                    ? "#FFCE00"
                    : animatedValue <= 4
                    ? "#73CF11"
                    : animatedValue <= 5
                    ? "#00B67A"
                    : "#00B67A",
              }}
            />
          }
        />
      ) : (
        <Rating
          name={name && name}
          defaultValue={defaultValue && defaultValue}
          value={value && value}
          sx={{ fontSize: fontSize && fontSize }}
          //   onChange={(event, newValue) => {
          //     setRating(newValue);
          //   }}
          //   onChangeActive={(event, newHover) => {
          //     setHover(newHover);
          //   }}
          precision={precision && precision}
          size={size && size}
          readOnly={readOnly && readOnly}
          icon={
            <StarRoundedIcon
              fontSize="inherit"
              sx={{
                color:
                  value <= 1
                    ? "#FF3722"
                    : value <= 2
                    ? "#FF8622"
                    : value <= 3
                    ? "#FFCE00"
                    : value <= 4
                    ? "#73CF11"
                    : value <= 5
                    ? "#00B67A"
                    : "#00B67A",
              }}
            />
          }
          emptyIcon={
            <StarBorderRoundedIcon
              fontSize="inherit"
              sx={{
                color:
                  value <= 1
                    ? "#FF3722"
                    : value <= 2
                    ? "#FF8622"
                    : value <= 3
                    ? "#FFCE00"
                    : value <= 4
                    ? "#73CF11"
                    : value <= 5
                    ? "#00B67A"
                    : "#00B67A",
              }}
            />
          }
        />
      )}
    </Fragment>
  );
};

export default AnimatedRating;
