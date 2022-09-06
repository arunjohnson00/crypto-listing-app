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
    backgroundColor: "#00030D",
  });

  return (
    <Grid item xs={12} px={10} py={4}>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
        <Grid item xs={12} py={3} px={3}>
          <div>
            <span
              className="ripple"
              style={{ left: "103px", top: "221px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "222px", top: "160px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "307px", top: "157px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "293px", top: "177px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "365px", top: "217px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "243px", top: "169px" }}
            ></span>
          </div>
          <div>
            <span
              className="ripple"
              style={{ left: "141px", top: "153px" }}
            ></span>
          </div>
          <div>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
              width="100%"
              style={{ minWidth: "430px" }}
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
              Our best users are all over the world with wide coverage
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
                  20M+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  People who have joined crybse
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "400", color: "#FFFFF5" }}
                >
                  100+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  Famous people playing crybse
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "400", color: "#FFFFF5" }}
                >
                  50
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "500", color: "#93949C" }}
                >
                  Coorporation with bigger companies
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
