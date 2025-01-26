import React from "react";
import { AppBar, Toolbar, Typography, TextField, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const Header = () => {
    const author_id = 'trollermaner';
  return (
    <AppBar position="sticky" sx={{ padding: "5px", bgcolor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {/* Home Button */}
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <img style={{width: '50px', height: '50px'}} src="/logo.jpg"/>
            <Typography variant="h4" sx={{ fontWeight: "600", marginLeft: 2, color: 'black', '&.MuiTypography-root': {textDecoration: "none"} }}>Beacons</Typography>
          </Box>
        </Link>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: '700px', marginLeft: 5, marginRight: 5 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: "5px" }} />,
            }}
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              input: { padding: "10px" },
              '& label.Mui-focused': {
                color: 'black', 
              },
              // Outlined variant styles
              '& .MuiOutlinedInput-root': {
                borderRadius: 2, // fully rounded
                transition: 'all 0.3s ease-in-out',
                '& fieldset': {
                  borderColor: 'grey.300', // default border color
                },
                '&:hover fieldset': {
                  borderColor: 'grey.500', // hover color
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // focus color
                },
              },
            }}
          />
        </Box>

        {/* Profile Button */}
        <Link to={`/user/${author_id}`}>
            <Avatar sx={{height: '50px', width: '50px'}}></Avatar>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
