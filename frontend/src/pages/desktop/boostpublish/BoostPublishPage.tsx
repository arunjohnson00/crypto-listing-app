import { Avatar, Box, Stack, Typography } from "@mui/material";
import BoostPublishCard from "../../../components/desktop/cards/boostpublishcard/BoostPublishCard";
import "./style.css";

import rocket from "../../../assets/boost/rocket.png";

const BoostPublishPage = () => {
  return (
    <Box mt={5}>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Boost"
            src={rocket}
            sx={{ width: 46, height: 46, borderRadius: 0 }}
          />
          <Stack direction="column" spacing={0}>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
              Boost your publish
            </Typography>
            <Typography
              sx={{ color: "#FFFFF5", fontSize: "1.1rem", fontWeight: 500 }}
            >
              Select your track
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
            This discount offer only one time, you will nerver see this offer
            again.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={7}>
          <Box className="rounded-corners-gradient-borders">
            <Box
              px={2}
              py={1}
              sx={{ backgroundColor: "#01061A", borderRadius: 2 }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="column" spacing={0}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      sx={{
                        color: "#FFFFF5",
                        fontSize: "3rem",
                        fontWeight: "bold",
                      }}
                      pt={1}
                    >
                      00
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFF5",
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                        lineHeight: 0,
                      }}
                    >
                      :
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#656888", fontSize: ".7rem" }}
                    pl={1.5}
                  >
                    Hours
                  </Typography>
                </Stack>

                <Stack direction="column" spacing={0}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      sx={{
                        color: "#FFFFF5",
                        fontSize: "3rem",
                        fontWeight: "bold",
                      }}
                      pt={1}
                    >
                      00
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFF5",
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                        lineHeight: 0,
                      }}
                    >
                      :
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#656888", fontSize: ".7rem" }}
                    pl={1.2}
                  >
                    Minutes
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={0} alignItems="center">
                  <Typography
                    sx={{
                      color: "#FFFFF5",
                      fontSize: "3rem",
                      fontWeight: "bold",
                    }}
                    pt={1}
                  >
                    25
                  </Typography>
                  <Typography sx={{ color: "#656888", fontSize: ".7rem" }}>
                    Seconds
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={5}
            py={3}
            sx={{
              backgroundColor: "#0A1476",
              borderRadius: 4,
              height: 40,
              maxWidth: 350,
            }}
          >
            <Typography sx={{ color: "#FFFFF5", fontSize: ".8rem" }}>
              Dis you know that projects that book promoted listed spot gest
              viewed 50x times more than basic listing ?
            </Typography>
          </Box>
          <Stack direction="column" spacing={0} justifyContent="flex-start">
            <Typography
              sx={{ color: "#FFFFF5", fontSize: "1.2rem", fontWeight: 700 }}
            >
              Or
            </Typography>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
              Continue with
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          <BoostPublishCard
            title={
              <Typography
                sx={{ color: "#FFFFF5", fontSize: "1rem", fontWeight: "bold" }}
                pl={3}
              >
                Fast Track
              </Typography>
            }
            button={true}
            offer={false}
          />
          <BoostPublishCard
            title={
              <Typography
                sx={{ color: "#FFFFF5", fontSize: "1rem", fontWeight: "bold" }}
                pl={3}
              >
                Fast Track <span style={{ color: "#3DBEC7" }}>Plus</span>
              </Typography>
            }
            button={true}
            offer={true}
          />

          <BoostPublishCard
            title={
              <Typography
                sx={{ color: "#FFFFF5", fontSize: "1rem", fontWeight: "bold" }}
                pl={3}
              >
                Fast Track <span style={{ color: "#06A481" }}>Platinum</span>
              </Typography>
            }
            button={true}
            offer={true}
          />

          <BoostPublishCard
            title={
              <Typography
                sx={{ color: "#FFFFF5", fontSize: "1rem", fontWeight: "bold" }}
                pl={3}
              >
                Fast Track <span style={{ color: "#DBD929" }}>Gold</span>
              </Typography>
            }
            button={true}
            offer={true}
          />

          <BoostPublishCard
            title={
              <Typography
                sx={{ color: "#FFFFF5", fontSize: "1rem", fontWeight: "bold" }}
                pl={3}
              >
                Normal Track
              </Typography>
            }
            button={true}
            offer={false}
            normal={true}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default BoostPublishPage;
