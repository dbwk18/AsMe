import React, { useState, useEffect } from 'react';
import { styled, makeStyles } from '@mui/styles';
import { Box, Link, Typography, Button, Stack, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CircleLogo from '../assets/images/CircleLogo.png';
import Logo from '../assets/images/Logo.png';
import GuestProfile from '../assets/images/GuestProfile.png';
import UserProfile from '../assets/images/UserProfile.png';
import CopyWrite from '../assets/images/CopyWrite.png';


function NavBar() {
    const classes= useStyles();
    const [userId, setUserId] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [imgSrc, setImgSrc] = useState(GuestProfile)
    const [openLoginForm, setOpenLoginForm] = useState(false);
    const [openSignupForm, setOpenSignupForm] = useState(false);
    const [isLogoCircle, setIsLogoCircle] = useState(true);

    useEffect(() => {
        setUserId(window.localStorage.getItem("user_id"));
        setUserName(window.localStorage.getItem("user_name"));
        // signOut();

        if (window.location.pathname === "/" || window.location.pathname === "/login" || window.location.pathname === "/signup") {
            setIsLogoCircle(true);
        }
        else {
            setIsLogoCircle(false);
        }

        window.addEventListener('scroll', updateScroll);
    }, [window.location.pathname])

    const signOut = () => {
        window.localStorage.removeItem("user_id");
        window.localStorage.removeItem("user_name")
    }

    const updateScroll = () => {
        if (window.location.pathname === "/" || window.location.pathname === "/login" || window.location.pathname === "/signup") {
            setIsLogoCircle(true);
        }
        else {
            setIsLogoCircle(false);
        }
    }

    useEffect(() => {
        if (userId) {
            setImgSrc(UserProfile);
        }
    }, [userId]);

    useEffect(() => {
        if (!openDrawer) {
            setOpenLoginForm(false);
            setOpenSignupForm(false);
        }
    }, [openDrawer]);

    const toggleDrawer = (event) => {
        setOpenDrawer(!openDrawer);
    }

    return (
        <NavBox sx={{ backgroundColor: "inherit" }}>
            <Stack direction="row" spacing="0.5rem" alignItems="center">
                <Link href="/" underline="none">
                    <Box height={"4rem"} display="flex" justifyContent="center" alignItems="center">
                        {isLogoCircle ? (
                            <img src={CircleLogo} height="64px" width="64px" />
                        ) : (
                            <img src={Logo} height="40px" />
                        )}
                    </Box>
                </Link>
                {isLogoCircle &&
                    <Typography color="#A09E99" fontSize="0.75rem" sx={{ width: "12rem" }}>글쓰기 완성 도움 플랫폼</Typography>
                }
            </Stack>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <Stack direction="row" spacing={3}>
                    <Button onClick={toggleDrawer} variant="ghost" sx={{ maxWidth: "2.25rem", minWidth: "2.25rem" }}>
                        <MenuIcon sx={{ fontSize: "2rem" }} />
                        <Drawer
                            sx={{ width: "28rem",
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                  width: "28rem",
                                  boxSizing: 'border-box',
                                  backgroundColor: "black"
                                }
                            }}
                            anchor="right"
                            open={openDrawer}
                            onKeyDown={() => setOpenDrawer(true)}
                            onClick={() => setOpenDrawer(true)}
                        >
                            <Box
                                sx={{ pt: "8rem" }}
                                role="presentation"
                                onKeyDown={() => setOpenDrawer(true)}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <Stack justifyContent="center" alignItems="center">
                                    <Box width="2.5rem" height="0.25rem" backgroundColor="#fff" sx={{ mb: "1.5rem" }} />
                                    <img src={imgSrc} width="164px" height="164px" />
                                    {userId ? (
                                        <React.Fragment>
                                            <Stack spacing="1rem" mt="2rem" alignItems="center">
                                                <Typography fontSize="20px" fontWeight="700" fontFamily="inter" sx={{ color: "secondary.light" }}>{userName}</Typography>
                                            </Stack>
                                            <Stack spacing={"2.5rem"} mt="6rem">
                                                <Button sx={{ borderRadius: 0, color: "#C5C5C5", border: "1px solid #C5C5C5" }} className={classes.menuButton} href="/draft" variant="outlined" onClick={toggleDrawer}>
                                                    <Typography fontWeight="700" fontFamily="inter" sx={{ color: "secondary.light" }}>글 작성하기</Typography>
                                                </Button>
                                                <Button sx={{ borderRadius: 0, color: "#C5C5C5", border: "1px solid #C5C5C5" }} className={classes.menuButton} href="/archive" variant="outlined" onClick={toggleDrawer}>
                                                    <Typography fontWeight="700" fontFamily="inter" sx={{ color: "secondary.light" }}>보관함 가기</Typography>
                                                </Button>

                                                <Button sx={{ borderRadius: 0 }} className={classes.menuButton} href="/wastebasket" variant="contained" onClick={toggleDrawer}>
                                                    <Typography fontWeight="700" fontFamily="inter" sx={{ color: "secondary.light" }}>휴지통 가기</Typography>

                                                </Button>
                                            </Stack>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Stack direction="row" spacing="1.2rem" mt="2rem" mb="4.5rem">
                                                <Button href="/login" onClick={() => setOpenLoginForm(true)} variant="outlined" color="secondary" sx={{ color: "#C5C5C5", border: "1px solid #C5C5C5", borderRadius: "0", p: "0.5rem 0.75rem", '&:hover': { borderColor: "#C5C5C5" } }}>
                                                    <Typography fontFamily="inter">로그인</Typography>
                                                </Button>
                                                <Button href="/signup" onClick={() => setOpenSignupForm(true)} variant="outlined" sx={{ color: "#F16600", border: "1px solid #F16600", borderRadius: "0", p: "0.5rem 0.75rem" }}>
                                                    <Typography fontFamily="inter">회원가입</Typography>
                                                </Button>
                                            </Stack>
                                            <img src={CopyWrite} style={{ paddingBottom: "8rem" }} />
                                            <Link color="primary.light">비밀번호 찾기</Link>
                                        </React.Fragment>
                                    )}
                                </Stack>
                            </Box>
                        </Drawer>
                    </Button>
                </Stack>
            </Box>
        </NavBox>
    )
}

export default NavBar

const useStyles = makeStyles(theme => ({
    "menuButton": {
        backgroundColor: theme.palette.primary.light,
        width: "15rem",
    }
}))

const NavBox = styled(Box)({
    zIndex: 9,
    display: "flex",
    alignItems: "center",
    width: "100vw",
    maxWidth: "100%",
    height: "7rem",
    padding: "0 3.5rem"
})
