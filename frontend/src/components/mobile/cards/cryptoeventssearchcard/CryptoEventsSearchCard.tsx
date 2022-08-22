import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers";

const CryptoEventsSearchCard = () => {
  const [search, setSearch] = useState<any>("");
  const [date, setDate] = useState<any>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Box
      sx={{ backgroundColor: "#071241", borderRadius: 5 }}
      py={2}
      px={4}
      width="100%"
    >
      <Stack direction="column" spacing={2} justifyContent="center">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              sx={{ fontSize: "1rem", color: "#4F5368", fontWeight: 500 }}
            >
              From
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                value={date?.from}
                onChange={(newValue) => {
                  setDate({ ...date, from: newValue });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#01061A",
                        borderRadius: 8,
                        color: "#FFFFFF",
                        height: 40,
                        fontSize: ".8rem",
                        maxWidth: 140,

                        "& fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                        "&:hover fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              sx={{ fontSize: "1rem", color: "#4F5368", fontWeight: 500 }}
            >
              To
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                value={date?.to}
                onChange={(newValue) => {
                  setDate({ ...date, from: newValue });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#01061A",
                        borderRadius: 8,
                        color: "#FFFFFF",
                        height: 40,
                        fontSize: ".8rem",
                        maxWidth: 140,

                        "& fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                        "&:hover fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "none",
                          border: 0,
                        },
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Stack>
        </Stack>

        <TextField
          value={search}
          onChange={(e: any) => setSearch(e?.target?.value)}
          placeholder="Enter Keyword"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#01061A",
              borderRadius: 3,
              color: "#FFFFFF",
              height: 47,
              fontSize: ".8rem",
              width: "auto",

              "& fieldset": {
                borderColor: "none",
                border: 0,
              },
              "&:hover fieldset": {
                borderColor: "none",
                border: 0,
              },
              "&.Mui-focused fieldset": {
                borderColor: "none",
                border: 0,
              },
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            height: 47,
            borderRadius: 3,
            backgroundColor: "#202EB4",
          }}
        >
          Search Events
        </Button>
      </Stack>
    </Box>
  );
};

export default CryptoEventsSearchCard;
