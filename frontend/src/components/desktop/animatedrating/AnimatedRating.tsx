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
  const colors = [
    "#FF3722",
    "#FF3722",
    "#FF8622",
    "#FFCE00",
    "#73CF11",
    "#00B67A",
  ];
  const [animatedValue, setAnimatedValue] = useState(1);

  useEffect(() => {
    const timer = () => {
      setAnimatedValue(animatedValue + 1);
    };

    // if you want it to finish at some point
    if (animatedValue >= 6) {
      return setAnimatedValue(1);
    }
    const id = setInterval(timer, 500);
    return () => clearInterval(id);
  }, [animatedValue]);

  return (
    <Fragment>
      {animated === true && animatedValue ? (
        <div>
          <Rating
            name={name && name}
            defaultValue={defaultValue && defaultValue}
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
                  color: colors[animatedValue],
                }}
              />
            }
            emptyIcon={
              <StarBorderRoundedIcon
                fontSize="inherit"
                sx={{
                  color: colors[animatedValue],
                }}
              />
            }
          />
        </div>
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
