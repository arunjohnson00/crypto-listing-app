import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const MobileBreadCrumbs = ({ home, path, data }: any) => {
  const location = useLocation();

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        maxItems={3}
        aria-label="breadcrumb"
        sx={{ color: "#2f2f2f", fontSize: ".75rem" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {home && home}
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {path && path}
        </Link>
        <Link
          to={{
            pathname: `/${path && path?.toLowerCase()}/${data?.name
              ?.replace(/ /g, "")
              .toLowerCase()}`,
          }}
          state={{ coin_id: data?.id }}
          style={{ textDecoration: "none", color: "#898989" }}
        >
          {data && data?.name}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default MobileBreadCrumbs;
