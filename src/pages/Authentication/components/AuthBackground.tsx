import { Box } from "@mui/material";

const AuthBackground = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        position: "absolute",
        filter: "blur(18px)",
        zIndex: -1,
        bottom: 0,
      }}
    >
      <svg height="100%" width="100%">
        <defs>
          <linearGradient id="0" x1="0.17" y1="0.13" x2="0.83" y2="0.87">
            <stop offset="0%" stopColor="#cae234" />
            <stop offset="12.29%" stopColor="#aae539" />
            <stop offset="24.57%" stopColor="#7be83c" />
            <stop offset="36.86%" stopColor="#40e869" />
            <stop offset="49.14%" stopColor="#45e298" />
            <stop offset="61.43%" stopColor="#49dcae" />
            <stop offset="86%" stopColor="#4fd1c5" />
          </linearGradient>
        </defs>
        <rect fill="url(#0)" height="100%" width="100%" />
      </svg>
    </Box>
  );
};

export default AuthBackground;
