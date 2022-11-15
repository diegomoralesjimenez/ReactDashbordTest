import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificactionsOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return ( 
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar*/}
      <Box
        display="flex"
        backgroundColor={color.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"/>
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon></SearchIcon>
          </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon/>
            ) : (
                <LightModeOutlinedIcon/>
            )}

        </IconButton>
        <IconButton>
            <NotificactionsOutlinedIcon></NotificactionsOutlinedIcon>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon></PersonOutlinedIcon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;