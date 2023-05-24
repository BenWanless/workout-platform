// material-ui
import {
  useMediaQuery,
  Container,
  Link,
  Typography,
  Stack,
  Theme,
} from "@mui/material";

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? "column" : "row"}
        justifyContent={matchDownSM ? "center" : "space-between"}
        spacing={2}
        textAlign={matchDownSM ? "center" : "inherit"}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Strive Fitness By&nbsp;
          <Typography
            component={Link}
            variant="subtitle2"
            href="https://github.com/BenWanless/workout-platform"
            target="_blank"
            underline="hover"
          >
            BenWanless
          </Typography>
        </Typography>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
