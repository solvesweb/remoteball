import { Box } from "@mui/material";

export const LandingLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex"}}>
      <Box sx={{ flex: 1}}>{children}</Box>
    </Box>

 );
}
