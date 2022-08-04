import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const BreadCrumbs = ({ data }: any) => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        maxItems={3}
        aria-label="breadcrumb"
        sx={{ color: "#FFFFF5", fontSize: ".75rem" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Coins
        </Link>
        <Link
          to={{
            pathname: `/coin/${data?.name?.replace(/ /g, "").toLowerCase()}`,
          }}
          state={{ coin_id: data?.id }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {data && data?.name}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
