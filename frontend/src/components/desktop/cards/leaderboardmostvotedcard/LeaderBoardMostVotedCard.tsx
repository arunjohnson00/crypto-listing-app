import { Grid, Stack, Box, Avatar, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import LeaderBoardVoteCardVoteCard from "../leaderboardvotecard/LeaderBoardVoteCardVoteCard";

const responsiveRank: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1.5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1.5,
  },
};

const LeaderBoardMostVotedCard = ({ windowInnerWidth }: any) => {
  const [width, height] = useWindowSize();
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#020011",
        border: "1px solid #151345",
      }}
      px={2}
      py={2}
      m={1}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{ alignItems: "center" }}
        width="100%"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <Stack
          direction="column"
          spacing={0}
          sx={{ alignItems: "center" }}
          width="100%"
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 500 }}>
            Top 3 Most Voted coin in
          </Typography>
          <Typography
            sx={{ color: "#918DEF", fontWeight: 500, fontSize: "1.1rem" }}
          >
            In Last 24 Hours
          </Typography>
        </Stack>
      </Stack>
      {width && width <= 900 ? (
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <Carousel
            // centerMode={true}
            responsive={responsiveRank}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            swipeable={true}
            partialVisible={false}
            autoPlay={false}
            draggable={true}
          >
            <Box pt={13}>
              <LeaderBoardVoteCardVoteCard
                position="2"
                variant="medium"
                width={"auto"}
              />{" "}
            </Box>
            <Box pt={9}>
              <LeaderBoardVoteCardVoteCard
                position="1"
                variant="large"
                width={"auto"}
              />{" "}
            </Box>
            <Box pt={13}>
              <LeaderBoardVoteCardVoteCard
                position="3"
                variant="medium"
                width={"auto"}
              />
            </Box>
          </Carousel>
        </Grid>
      ) : (
        <Stack
          direction="row"
          spacing={0}
          sx={{ alignItems: "center", justifyContent: "center" }}
          width="100%"
          pt={9}
        >
          <LeaderBoardVoteCardVoteCard position="2" variant="medium" />{" "}
          <LeaderBoardVoteCardVoteCard position="1" variant="large" />{" "}
          <LeaderBoardVoteCardVoteCard position="3" variant="medium" />
        </Stack>
      )}
    </Box>
  );
};

export default LeaderBoardMostVotedCard;
