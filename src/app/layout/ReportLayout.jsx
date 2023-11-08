import { SideBar }  from "../components";
import { Box } from "@mui/system";
import { NavBar } from "../components";
import { useState } from "react";

export const ReportLayout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  
    return (
      <Box sx={{ display: "flex"}}>
        <NavBar  action={handleMenuButtonClick}/>
        <SideBar  open={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}/>

        <Box component="main" display='flex' justifyContent='center' sx={{ flexGrow: 1, p: 3, mt: 16}}>
          {children}
        </Box>
      </Box>
    );

};
