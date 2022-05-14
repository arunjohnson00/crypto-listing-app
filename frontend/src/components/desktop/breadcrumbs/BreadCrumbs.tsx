import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const BreadCrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#FFFFF5" }}>
        <Link underline="hover" color="#FFFFF5" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="#FFFFF5"
          href="/material-ui/getting-started/installation/"
        >
          Coins
        </Link>
        <Link
          underline="hover"
          color="#FFFFF5"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          SafeMoon
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
