import { Grid, Stack, Typography } from "@mui/material";
import DottedMap from "dotted-map";
import "./style.css";
const BannerMap = () => {
  const map = new DottedMap({ height: 60, grid: "vertical" });

  // map.addPin({
  //   lat: 40.73061,
  //   lng: -83.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: 50.73061,
  //   lng: 83.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: -15.73061,
  //   lng: -53.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: 60.73061,
  //   lng: 13.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: 22.73061,
  //   lng: 73.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: -29.73061,
  //   lng: 133.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: -29.73061,
  //   lng: 133.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });

  // map.addPin({
  //   lat: -9.73061,
  //   lng: 30.935242,
  //   svgOptions: { color: "#7709EE", radius: 1 },
  // });
  const svgMap = map.getSVG({
    radius: 0.35,
    color: "#2D2E35",
    shape: "circle",
    backgroundColor: "#010511",
  });

  return (
    <Grid item xs={12} px={10} py={4}>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Grid item xs={12} py={3} px={3}>
          <div style={{ position: "absolute" }}>
            <div style={{ position: "relative", top: 30, left: 40 }}>
              <div>
                <span
                  className="ripple"
                  style={{ left: "145px", top: "021px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple1"
                  style={{ left: "233px", top: "-10px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple5"
                  style={{ left: "307px", top: "-57px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple3"
                  style={{ left: "448px", top: "-27px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple4"
                  style={{ left: "365px", top: "017px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple"
                  style={{ left: "116px", top: "35px" }}
                ></span>
              </div>
              <div>
                <span
                  className="ripple6"
                  style={{ left: "455px", top: "44px" }}
                ></span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
              width="100%"
              style={{ minWidth: "100%" }}
              alt=""
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          {" "}
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "300", color: "#FFFFF5" }}
            >
              Worlds fast emerging Crypto Listing & News Platform.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "400", color: "#93949C" }}
            >
              Bitcoin attempted a recovery wave above $32,000 against the US
              Dollar. BTC is struggling and remains at a risk of more losses
              below $30,000. Bitcoin started a short-term recovery wave after it
              tested the $30,000 zone.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "400", color: "#FFFFF5" }}
                >
                  208.1 M+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  Avg. Monthly Pageviews
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "400", color: "#FFFFF5" }}
                >
                  1.9 M+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  Registered users
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "400", color: "#FFFFF5" }}
                >
                  20k+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  Assets listed
                </Typography>
              </Grid>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default BannerMap;
