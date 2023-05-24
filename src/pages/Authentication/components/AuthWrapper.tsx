import PropTypes from "prop-types";

import { Box, Grid } from "@mui/material";

import AuthCard from "./AuthCard";

import AuthFooter from "./AuthFooter.tsx";

import AuthBackground from "./AuthBackground.tsx";
import { ReactNode } from "react";

type AuthWrapperProps = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => (
  <Box sx={{ minHeight: "100vh" }}>
    <AuthBackground />

    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node,
};

export default AuthWrapper;
