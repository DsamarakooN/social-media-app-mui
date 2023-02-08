import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box
            flex={2} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" width={400}>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>

                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://minimaltoolkit.com/images/randomdata/male/63.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
                    />
                    <Avatar
                        alt="Joe Blow"
                        src="https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg"
                    />
                    <Avatar
                        alt="Joe Sixpack"
                        src="https://minimaltoolkit.com/images/randomdata/male/63.jpg"
                    />
                    <Avatar
                        alt="Joe Doakes"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                    />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mb={2}>Latest Photos</Typography>

                <ImageList cols={3} rowHeight={100}>
                    <ImageListItem>
                        <img
                            src="https://tourscanner.com/blog/wp-content/uploads/2018/05/Nuwara-Eliya-Tea-Plantation-Places-to-Visit-Sri-Lanka.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/shutterstock_1084348016.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://lp-cms-production.imgix.net/2021-04/Mihintale_Sri_Lanka.jpg?auto=format&q=75&w=3840"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/Sri_Lanka_main.jpg&w=500&h=400"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://www.holidify.com/images/bgImages/YALA-NATIONAL-PARK.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://srilankatravelpages.com/media/2022/11/10-Days-in-Sri-Lanka-and-Unique-Itinerary-Ideas.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://www.planetware.com/wpimages/2020/01/sri-lanka-best-places-to-visit-kandy.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://www.aswesawit.com/wp-content/uploads/2019/07/sri-lanka-cover.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src="https://travelmelodies.com/wp-content/uploads/2020/10/travel-melodies-galle-sri-lanka-768x576.jpg"
                            alt="TeaState"
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://minimaltoolkit.com/images/randomdata/male/63.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>


            </Box>
        </Box>
    )
}

export default Rightbar;