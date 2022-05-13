import { Grid, Stack, Typography } from "@mui/material";
import DottedMap from "dotted-map";

const MobileBannerMaps = () => {
  const map = new DottedMap({ height: 60, grid: "vertical" });

  map.addPin({
    lat: 40.73061,
    lng: -83.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: 50.73061,
    lng: 83.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: -15.73061,
    lng: -53.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: 60.73061,
    lng: 13.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: 22.73061,
    lng: 73.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: -29.73061,
    lng: 133.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: -29.73061,
    lng: 133.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });

  map.addPin({
    lat: -9.73061,
    lng: 30.935242,
    svgOptions: { color: "#09e2b1", radius: 1 },
  });
  const svgMap = map.getSVG({
    radius: 0.35,
    color: "#2D2E35",
    shape: "circle",
    backgroundColor: "#00030A",
  });

  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
      width="100%"
      alt=""
    />
  );
};

export default MobileBannerMaps;
