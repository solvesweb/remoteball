import { Box } from "@mui/material";

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex"}}>
      <Box sx={{ flex: 1, p: 5 }}>{children}</Box>
    </Box>

 );
};
