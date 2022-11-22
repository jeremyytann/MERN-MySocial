import { Box, useMediaQuery } from "@mui/material"
import Navbar from "Components/Navbars/Navbar"
import AdvertWidget from "Components/Widgets/AdvertWidget";
import FriendListWidget from "Components/Widgets/FriendListWidget";
import MyPostWidget from "Components/Widgets/MyPostWidget";
import PostsWidget from "Components/Widgets/PostsWidget";
import UserWidget from "Components/Widgets/UserWidget";
import { useSelector } from "react-redux";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between">
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>

                <Box 
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}>
                    <MyPostWidget picturePath={picturePath} />
                    <PostsWidget userId={_id} />
                </Box>

                {isNonMobileScreens ? 
                    <Box flexBasis="26%">
                        <AdvertWidget />
                        <Box m="2rem 0" />
                        <FriendListWidget userId={_id} />
                    </Box> : null
                }
            </Box>
        </Box>
    )
}

export default HomePage