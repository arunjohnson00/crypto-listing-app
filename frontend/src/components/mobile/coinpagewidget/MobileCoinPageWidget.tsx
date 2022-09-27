import { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  CardMedia,
  Box,
  Avatar,
  Checkbox,
  LinearProgress,
  Link,
  Button,
  TextareaAutosize,
  Tooltip,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { coinFAQBlockRequest } from "../../../store/action";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MobileChartWidgetCard from "../cards/chartwidgetcard/MobileChartWidgetCard";

const MobileCoinPageWidget = () => {
  const [copied, setCopied] = useState(false);
  const copyHandler = (e: any) => {
    setCopied(true);

    console.log(e);
    setTimeout(function () {
      setCopied(false);
    }, 500);
  };

  return (
    <Stack direction="column" spacing={5}>
      <Box sx={{ width: "auto" }}>
        <MobileChartWidgetCard button={false} />
      </Box>
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2} alignItems="flex-end">
          <Box
            sx={{
              width: "auto",
              maxWidth: "auto",
              height: "auto",

              borderRadius: 2,
              border: "1px solid #171739",
              fontSize: ".85rem",
              background: "#FFFFFF",
            }}
          >
            {" "}
            <Box
              m={1}
            >{`<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>`}</Box>
          </Box>
          <CopyToClipboard
            options={{ message: "Copy" }}
            text={`<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>`}
            onCopy={(e: any) => copyHandler(e)}
          >
            <Tooltip title={`${copied ? "Copied" : "Copy this Widget"}`}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#2B2984",
                  fontSize: ".8rem",
                  width: 140,
                  height: 40,
                }}
              >
                Copy Widget
              </Button>
            </Tooltip>
          </CopyToClipboard>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobileCoinPageWidget;
