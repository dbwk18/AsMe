import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';


function NavBar() {
    const user = useSelector(state => state[0]?.user);

    const [bgColor, setBgColor] = useState("black");
    const [visibility, setVisibility] = useState("flex");

    useEffect(() => {
        if (window.location.pathname === "/") {
            setBgColor("black");
        }

        window.addEventListener('scroll', updateScroll);
    }, [window.location.pathname]);

    const updateScroll = () => {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (window.location.pathname === "/") {
            setBgColor("black");
            scrollPosition < 1080 ? setBgColor("black") : setBgColor("inherit");
        }
    }
    
    const NavBox = styled(Box)({
        position: "fixed", 
        zIndex: 9, 
        display: `${visibility}`, 
        alignItems: "center",
        width: "100vw",
        maxWidth: "100%",
        height: "5rem",
    })
    
    return (
        <NavBox sx={{ backgroundColor: bgColor }}>
            <Link href="/" underline="none" pl={4}>
                <Typography variant="h6" fontWeight="700" letterSpacing={4} fontFamily="helvetica">LOGO</Typography>
            </Link>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", px: 4 }}>
                <Box sx={{ pl: "12rem" }}>
                    <Link href="/" underline="none">
                        <Typography variant="h6"></Typography>
                    </Link>
                </Box>

                {user?.userEmail ? (
                    // <Link href={`/profile/${user.userId}`} underline="none" color="#fff">{user?.username}</Link>
                    <Typography>사용자</Typography>
                ) : (
                    <Link href="/login" underline="none" color="#fff" letterSpacing={1}>로그인</Link>
                )}
            </Box>
        </NavBox>
    )
}

export default NavBar
