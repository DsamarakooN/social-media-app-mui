import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box
            flex={2} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed">
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
            </Box>
        </Box>
    )
}

export default Rightbar;