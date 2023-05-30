
import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
    const data = [
        {
            id: 1,
            title: "Dhanush Samarakoon",
            date: "2023-03-12",
            imageUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-In-Sri-Lanka_4th-jun.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
        },
        {
            id: 2,
            title: "John Doe",
            date: "2022-02-13",
            imageUrl: "https://www.aswesawit.com/wp-content/uploads/2019/07/sri-lanka-cover.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
        },
        {
            id: 3,
            title: "Yashodha Dhanuska",
            date: "2022-05-12",
            imageUrl: "https://lp-cms-production.imgix.net/2021-04/Mihintale_Sri_Lanka.jpg?auto=format&q=75&w=3840",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
        },
        {
            id: 4,
            title: "Lara Samarakoon",
            date: "2022-05-12",
            imageUrl: "https://www.holidify.com/images/bgImages/YALA-NATIONAL-PARK.jpg",
            description: "Lorem ipsum dolor sit 1 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
        },
        {
            id: 5,
            title: "Dhanushka Samarakoon",
            date: "2022-05-12",
            imageUrl: "https://www.holidify.com/images/bgImages/YALA-NATIONAL-PARK.jpg",
            description: "Lorem ipsum dolor sit 12345 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
        }
    ]

    return (
        <Box
            flex={4}
            p={2}
        >
            {data.map((post) => {
                return (
                    <div key={post.id}>
                        <Post
                            title={post.title}
                            date={post.date}
                            imageUrl={post.imageUrl}
                            description={post.description}
                        />
                    </div>
                )
            })}

        </Box>
    )
}

export default Feed;