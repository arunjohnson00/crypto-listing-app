import { Grid, Stack, Typography } from "@mui/material";
import DottedMap from "dotted-map";
import "./style.css";
const MobileBannerMaps = () => {
  const map = new DottedMap({ height: 60, grid: "vertical" });

  // map.addPin({
  //   lat: 40.73061,
  //   lng: -83.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: 50.73061,
  //   lng: 83.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: -15.73061,
  //   lng: -53.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: 60.73061,
  //   lng: 13.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: 22.73061,
  //   lng: 73.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: -29.73061,
  //   lng: 133.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: -29.73061,
  //   lng: 133.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });

  // map.addPin({
  //   lat: -9.73061,
  //   lng: 30.935242,
  //   svgOptions: { color: "#09e2b1", radius: 1 },
  // });
  const svgMap = map.getSVG({
    radius: 0.35,
    color: "#2D2E35",
    shape: "circle",
    backgroundColor: "#00030A",
  });

  return (
    <div style={{ width: "100%" }}>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "83px", top: "221px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "202px", top: "160px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "187px", top: "200px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "233px", top: "120px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "100px", top: "177px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "223px", top: "122px" }}
        ></span>
      </div>
      <div>
        <span
          className="ripplemobile"
          style={{ left: "261px", top: "133px" }}
        ></span>
      </div>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        style={{ width: "100%" }}
        alt=""
      />
    </div>
  );
};

export default MobileBannerMaps;
