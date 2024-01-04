/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
  Menu,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardCard from "../components/DasboardCard";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";



const Dashboard = () => {
  useEffect(() => {
    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  const [UserMenuanchorEl, setUserMenuanchorEl] = useState<null | HTMLElement>(
    null
  );
  const UserMenuOpen = Boolean(UserMenuanchorEl);
  const openUserMenu = (event: any) => {
    setUserMenuanchorEl(event.currentTarget);
  };
  const closeUserMenu = () => {
    setUserMenuanchorEl(null);
  };
  const [NotificationMenuanchorEl, setNotificationMenuanchorEl] =
    useState<null | HTMLElement>(null);
  const NotificationMenuOpen = Boolean(NotificationMenuanchorEl);

  const openNotificationMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotificationMenuanchorEl(event.currentTarget);
  };
  const closeNotificationrMenu = () => {
    setNotificationMenuanchorEl(null);
  };
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth={"xl"} sx={{ backgroundColor: "#f1f1f1", px: '0px !important ' }}>
        <Box
          sx={{
            pt: 2,
            width: "100%",
            display: "flex",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              px: 2,
              width: "250px",
              display: "flex",
              flexDirection: 'column',
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              src="/images/i13logo.png"
              alt="logo"
              style={{ maxWidth: "100%", maxHeight: '100%' }}
            />
            <MenuList sx={{ width: '100%', pt: 3 }}>
              <MenuItem sx={{ py: 1 }}>
                <ListItemIcon>
                  <ViewInArIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>My Projects</ListItemText>
              </MenuItem>
              <MenuItem sx={{ py: 1 }}>
                <ListItemIcon>
                  <TimerOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Recent Projects</ListItemText>
              </MenuItem>
              <MenuItem sx={{ py: 1 }}>
                <ListItemIcon>
                  <GroupsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Team Projects</ListItemText>
              </MenuItem>
            </MenuList>
          </Box>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", pl: 2 }}>
            <Box
              sx={{
                px: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                size="small"
                id="search_field"
                placeholder="Search Project, Canvas"
                sx={{ width: "45ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={openNotificationMenu} sx={{ mr: 3 }}>
                  <Badge badgeContent={4} color="primary">
                    <NotificationsNoneOutlinedIcon />
                  </Badge>
                </IconButton>
                <Menu
                  elevation={1}
                  disableAutoFocus
                  disableEnforceFocus
                  disablePortal
                  disableRestoreFocus
                  anchorEl={NotificationMenuanchorEl}
                  open={NotificationMenuOpen}
                  onClose={closeNotificationrMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    sx: {
                      width: "400px",
                      marginTop: "42px",
                    },
                  }}
                >
                  <MenuItem>
                    <ListItemIcon sx={{ pr: 2 }}>
                      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Remy Sharp" sx={{ width: 35, height: 35 }}>
                        N
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText>Jhon Dave Shared a new canvas.</ListItemText>
                  </MenuItem>
                </Menu>
                <Avatar
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  onClick={openUserMenu}
                  sx={{ width: 35, height: 35, cursor: "pointer" }}
                >
                  N
                </Avatar>
                <Menu
                  elevation={1}
                  disableAutoFocus
                  disableEnforceFocus
                  disablePortal
                  disableRestoreFocus
                  disableAutoFocusItem
                  anchorEl={UserMenuanchorEl}
                  open={UserMenuOpen}
                  onClose={closeUserMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    sx: {
                      minWidth: "200px",
                      marginTop: "42px",
                    },
                  }}
                >
                  <MenuItem>
                    <ListItemIcon sx={{ minWidth: "40px", mr: 2 }}>
                      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Remy Sharp" sx={{ width: 35, height: 35 }}>
                        N
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText>Narayana Lvsaln</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon sx={{ minWidth: "40px", mr: 2 }}>
                      <SettingsOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon sx={{ minWidth: "40px", mr: 2 }}>
                      <PaymentOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Payments</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ minWidth: "40px", mr: 2 }}>
                      <ExitToAppOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Signout</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                p: 3,
                mt: 2,
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Typography variant="h5" component={"h5"}>
                My Projects
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Box sx={{ flexGrow: 1, pt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Card
                      sx={{
                        maxHeight: "250px",
                        height: "250px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <AddIcon sx={{ fontSize: "60px" }} />
                      <Typography sx={{ pt: 2 }}>New Project</Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={2}>
                    <DashboardCard />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
