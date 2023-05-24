import PropTypes from "prop-types";
import { useMemo } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, Direction, ThemeProvider } from "@mui/material/styles";

import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";

type ThemeCustomizationProps = {
  children: React.ReactNode;
};

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const theme = Palette("light");

  //   eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);

  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr" as Direction,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      typography: themeTypography,
      customShadows: themeCustomShadows,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node,
};
