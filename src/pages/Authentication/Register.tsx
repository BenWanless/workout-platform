import { Link } from "react-router-dom";

import { Grid, Stack, Typography } from "@mui/material";
import { AuthRegister } from "./components/AuthRegister";
import AuthWrapper from "./components/AuthWrapper";
import logo from "../../assets/Images/strive-logo.png";

export default function Register() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid item xs={12} container justifyContent="center">
            <img src={logo} alt="logo" />
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Sign up</Typography>
            <Typography
              component={Link}
              to="/login"
              variant="body1"
              sx={{ textDecoration: "none" }}
              color="primary"
            >
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
