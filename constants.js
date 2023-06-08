import { createUseStyles } from "react-jss";

export const defaultFont = "DMSans-Regular";
export const defaultFontMedium = "DMSans-Medium";
export const defaultFontBold = "DMSans-Bold";

export const colorDark = "#000000";
export const colorLight = "#FFFFFF";
export const colorGray = "#787878";
export const colorLightGray = "#F9F9F9";
export const colorBlue = "#001AFF";

export const CONTAINER_WIDTH = 1040; // Container width + padding of 20 on each side
export const DEFAULT_PADDING = 20;
export const DEFAULT_RADIUS = 4;

export const useGlobalStyles = createUseStyles({
  container: {
    width: "100%",
    maxWidth: CONTAINER_WIDTH,
    paddingLeft: DEFAULT_PADDING,
    paddingRight: DEFAULT_PADDING,
    margin: "0 auto",
    boxSizing: "border-box",
  },
  h1: {
    fontFamily: defaultFontMedium,
    fontSize: 24,
    fontWeight: "normal",
    color: colorGray,
    "& span": {
      color: colorDark,
    },
  },
  h2: {
    fontFamily: defaultFontBold,
    fontSize: 36,
    fontWeight: "normal",
    color: colorDark,
  },
  h3: {
    fontFamily: defaultFontBold,
    fontSize: 32,
    fontWeight: "normal",
    color: colorDark,
  },
  h4: {
    fontFamily: defaultFont,
    fontSize: 12,
    fontWeight: "normal",
    color: colorGray,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  h5: {
    fontFamily: defaultFontBold,
    fontSize: 16,
    fontWeight: "normal",
    color: colorDark,
  },
});
