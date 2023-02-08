import { AccountBoxRounded, ArticleRounded, GroupsRounded, HomeRounded, NightsStayRounded, PersonRounded, SettingsOutlined, StorefrontOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const Sidebar = () => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#home">
                            <ListItemIcon>

                                <HomeRounded />

                            </ListItemIcon>
                            <ListItemText primary="Home Page" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#Pages">
                            <ListItemIcon>

                                <ArticleRounded />

                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#groups">
                            <ListItemIcon>

                                <GroupsRounded />

                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#marketplace">
                            <ListItemIcon>

                                <StorefrontOutlined />

                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#friends">
                            <ListItemIcon>

                                <PersonRounded />

                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#settings">
                            <ListItemIcon>

                                <SettingsOutlined />

                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#profile">
                            <ListItemIcon>

                                <AccountBoxRounded />

                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton LinkComponent="a" href="#profile">
                            <ListItemIcon>

                                <NightsStayRounded />

                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>

        </Box>
    )
}

export default Sidebar;